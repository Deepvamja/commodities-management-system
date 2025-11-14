import { NextResponse } from 'next/server';

export async function GET() {
  // Mock dashboard statistics
  const stats = {
    totalProducts: 8,
    totalValue: 45620.50,
    lowStock: 3,
    categories: 5,
    recentActivity: [
      { action: 'Updated', product: 'Rice', user: 'John Manager', time: '2 hours ago' },
      { action: 'Added', product: 'Tea Leaves', user: 'Jane Keeper', time: '5 hours ago' },
      { action: 'Updated', product: 'Sugar', user: 'John Manager', time: '1 day ago' },
    ],
    categoryData: [
      { name: 'Grains', value: 850, products: 2 },
      { name: 'Seasonings', value: 175, products: 2 },
      { name: 'Oils', value: 100, products: 1 },
      { name: 'Beverages', value: 125, products: 2 },
      { name: 'Sweeteners', value: 200, products: 1 },
    ],
    monthlyTrends: [
      { month: 'Jan', products: 45, value: 32000 },
      { month: 'Feb', products: 52, value: 38000 },
      { month: 'Mar', products: 48, value: 35000 },
      { month: 'Apr', products: 65, value: 45000 },
      { month: 'May', products: 58, value: 42000 },
      { month: 'Jun', products: 70, value: 48000 },
    ],
  };

  return NextResponse.json(stats);
}
