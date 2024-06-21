import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export function middleware(request) {
    const exists = cookies().get('user')?.value
    if(exists){
      // console.log("exists",JSON.parse(exists));
      // if (JSON.parse(exists)?.isAdmin !== true && request.nextUrl.pathname === "/profile") {
        const user =  JSON.parse(exists);
        if (user.isAdmin !== true && request.nextUrl.pathname.startsWith("/profile")) {
        console.log("abc");
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
      return NextResponse.next()
    }else{
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
   
  export const config = {
    // matcher: ['/dashboard/:path*','/profile/:path*'],
    matcher: ['/profile/:path*'],
  }