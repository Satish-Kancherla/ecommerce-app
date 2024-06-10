import { NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    const {email,password} = await req.json();

    const user = await prisma.user.findUnique({
      where: {email},
    });
   
    if (user && await bcrypt.compare(password, user.password)) {
      delete user.password
      delete user.id
      return NextResponse.json(user, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
