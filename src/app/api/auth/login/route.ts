import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Parse the JSON body
  console.log(request);
  const { email, password } = await request.json().catch(err => {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  });

  // Mock login logic
  if (email === 'user@example.com' && password === 'password') {
    const mockAccessToken = 'mockAccessToken123';
    return NextResponse.json({ accessToken: mockAccessToken });
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}