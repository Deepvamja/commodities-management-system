export type UserRole = 'Manager' | 'Store Keeper';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  unit: string;
  lastUpdated: string;
  updatedBy: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

export interface DashboardStats {
  totalProducts: number;
  totalValue: number;
  lowStock: number;
  categories: number;
}
