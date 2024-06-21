"use client";
import axios from "axios";
import React, { useState, useContext, ReactNode, useEffect } from "react";

export interface User {
  email: string;
  isAdmin: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, isAdmin: boolean) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, isAdmin: boolean) => {
    // setUser({ email,isAdmin });
    // localStorage.setItem("user", JSON.stringify({ email }));
    const users = { email, isAdmin };
    setUser(users);
    localStorage.setItem("user", JSON.stringify(users));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    axios.post("/api/auth/logout")                
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
