import { NextResponse } from 'next/server';

export function middleware(req, ev) {
	return NextResponse.redirect('https://nextjs.org/');
}
