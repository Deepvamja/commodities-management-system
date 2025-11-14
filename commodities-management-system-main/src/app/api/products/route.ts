import { NextRequest, NextResponse } from 'next/server';
import { Product } from '@/lib/types';

// Mock products database
let products: Product[] = [
  {
    id: '1',
    name: 'Rice',
    category: 'Grains',
    quantity: 500,
    price: 2.50,
    unit: 'kg',
    lastUpdated: new Date().toISOString(),
    updatedBy: 'John Manager',
  },
  {
    id: '2',
    name: 'Wheat',
    category: 'Grains',
    quantity: 350,
    price: 3.00,
    unit: 'kg',
    lastUpdated: new Date().toISOString(),
    updatedBy: 'Jane Keeper',
  },
  {
    id: '3',
    name: 'Sugar',
    category: 'Sweeteners',
    quantity: 200,
    price: 1.50,
    unit: 'kg',
    lastUpdated: new Date().toISOString(),
    updatedBy: 'John Manager',
  },
  {
    id: '4',
    name: 'Salt',
    category: 'Seasonings',
    quantity: 150,
    price: 0.80,
    unit: 'kg',
    lastUpdated: new Date().toISOString(),
    updatedBy: 'Jane Keeper',
  },
  {
    id: '5',
    name: 'Cooking Oil',
    category: 'Oils',
    quantity: 100,
    price: 5.00,
    unit: 'liters',
    lastUpdated: new Date().toISOString(),
    updatedBy: 'John Manager',
  },
  {
    id: '6',
    name: 'Black Pepper',
    category: 'Seasonings',
    quantity: 25,
    price: 12.00,
    unit: 'kg',
    lastUpdated: new Date().toISOString(),
    updatedBy: 'Jane Keeper',
  },
  {
    id: '7',
    name: 'Coffee Beans',
    category: 'Beverages',
    quantity: 80,
    price: 15.00,
    unit: 'kg',
    lastUpdated: new Date().toISOString(),
    updatedBy: 'John Manager',
  },
  {
    id: '8',
    name: 'Tea Leaves',
    category: 'Beverages',
    quantity: 45,
    price: 10.00,
    unit: 'kg',
    lastUpdated: new Date().toISOString(),
    updatedBy: 'Jane Keeper',
  },
];

export async function GET() {
  return NextResponse.json({ products });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newProduct: Product = {
      id: Date.now().toString(),
      ...body,
      lastUpdated: new Date().toISOString(),
    };
    products.push(newProduct);
    return NextResponse.json({ product: newProduct, message: 'Product added successfully' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to add product' },
      { status: 500 }
    );
  }
}
