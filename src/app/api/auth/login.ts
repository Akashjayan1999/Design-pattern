

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  console.log(request);
  
  // Parse the JSON body
  const { email, password } = await request.json().catch(err => {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  });

  // Log the request for debugging
  console.log(request);

  // Mock login logic
  if (email === 'user@example.com' && password === 'password') {
    const mockAccessToken = 'mockAccessToken123';
    return NextResponse.json({ accessToken: mockAccessToken });
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}