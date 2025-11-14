import { NextRequest, NextResponse } from 'next/server';

// This would be the same products array in a real app with a database
let products = [
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
  // ... other products
];

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const index = products.findIndex((p) => p.id === params.id);
    
    if (index === -1) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      );
    }

    products[index] = {
      ...products[index],
      ...body,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json({
      product: products[index],
      message: 'Product updated successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to update product' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const index = products.findIndex((p) => p.id === params.id);
    
    if (index === -1) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      );
    }

    products.splice(index, 1);

    return NextResponse.json({
      message: 'Product deleted successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to delete product' },
      { status: 500 }
    );
  }
}
