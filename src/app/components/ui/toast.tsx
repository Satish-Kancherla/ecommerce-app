
"use client";

import * as Dialog from '@radix-ui/react-dialog';
import { useState, useEffect } from 'react';

interface ToastProps {
  title: string;
  description?: string;
  duration?: number;
  onClose: () => void;
}

const Toast = ({ title, description, duration = 1000, onClose }: ToastProps) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <Dialog.Content className="fixed bottom-5 right-5 w-80 p-4 bg-white rounded-lg shadow-lg">
          <Dialog.Title className="text-lg font-bold">{title}</Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-600">
            {description}
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Toast;
