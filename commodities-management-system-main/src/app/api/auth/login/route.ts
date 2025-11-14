import { NextRequest, NextResponse } from 'next/server';

// Mock users database
const users = [
  {
    id: '1',
    email: 'manager@example.com',
    password: 'manager123',
    name: 'John Manager',
    role: 'Manager' as const,
  },
  {
    id: '2',
    email: 'keeper@example.com',
    password: 'keeper123',
    name: 'Jane Keeper',
    role: 'Store Keeper' as const,
  },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      user: userWithoutPassword,
      message: 'Login successful',
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
