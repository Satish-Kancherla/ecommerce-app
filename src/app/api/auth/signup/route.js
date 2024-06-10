import {prisma} from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST( req) {
        const body =await req.json();

        const hashedPassword = await bcrypt.hash(body.password, 10);
       
        try {
            const user = await prisma.user.create({
                data:{...body,password:hashedPassword   },
            });

           return NextResponse.json(user,{status:201})
        } catch (error) {
            return NextResponse.json(error,{status:401})
        }
    
}
