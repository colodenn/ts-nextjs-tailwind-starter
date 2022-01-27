import { NextResponse } from 'next/server';

export function middleware() {
  // check if logged in or not :)
  return NextResponse.next();
}
