
import { NextResponse } from 'next/server';

export async function GET() {
  // Mock refresh token logic
  const mockNewAccessToken = 'mockNewAccessToken456';
  return NextResponse.json({ accessToken: mockNewAccessToken });
}
