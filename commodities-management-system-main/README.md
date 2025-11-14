# 🏢 Commodities Management System

A modern, feature-rich inventory management system built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Designed for efficient commodity tracking with role-based access control, real-time analytics, and beautiful UI/UX.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🔐 Authentication & Security
- **Role-Based Access Control** - Manager and Store Keeper roles with distinct permissions
- **Secure Session Management** - Client-side authentication with persistent sessions
- **Route Guards** - Protected routes with automatic role-based redirects
- **Demo Credentials** - Quick-fill buttons for testing different user roles

### 📊 Manager Dashboard
- **Real-Time Statistics** - Track total products, inventory value, and low stock alerts
- **Category Analytics** - Visual distribution of product categories with progress bars
- **Activity Feed** - Monitor recent system activities and updates
- **Monthly Trends** - Visualize inventory patterns over time
- **Exclusive Access** - Manager-only features with automatic access control

### 📦 Product Management
- **Full CRUD Operations** - Create, Read, Update, and Delete products seamlessly
- **Smart Search** - Real-time filtering across product names and categories
- **Stock Level Indicators** - Visual badges for Low/Medium/High stock levels
- **Categorization** - Organize products into Electronics, Groceries, Clothing, and more
- **Multi-Role Access** - Available to both Managers and Store Keepers

### 🎨 UI/UX Enhancements
- **Light/Dark Mode** - Smooth theme switching with persistent preferences
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Modern Color Scheme** - Vibrant, accessible color palette
- **Smooth Animations** - Polished transitions and micro-interactions
- **Accessible Components** - Built with shadcn/ui for WCAG compliance

### 🎯 Role-Based Features

| Feature | Manager | Store Keeper |
|---------|---------|--------------|
| Login | ✅ | ✅ |
| Dashboard Analytics | ✅ | ❌ |
| View Products | ✅ | ✅ |
| Add Products | ✅ | ✅ |
| Edit Products | ✅ | ✅ |
| Theme Toggle | ✅ | ✅ |

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17 or later
- **Bun** (recommended) or npm/yarn/pnpm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd commodities-management-system
```

2. **Install dependencies**
```bash
bun install
# or
npm install
```

3. **Run the development server**
```bash
bun dev
# or
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 Demo Accounts

### Manager Account
```
Email: manager@example.com
Password: manager123
```
**Access:** Dashboard + Products

### Store Keeper Account
```
Email: keeper@example.com
Password: keeper123
```
**Access:** Products only

## 📁 Project Structure

```
src/
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── dashboard/    # Dashboard data endpoints
│   │   └── products/     # Product CRUD endpoints
│   ├── dashboard/        # Manager dashboard page
│   ├── login/            # Login page
│   ├── products/         # Products management page
│   ├── layout.tsx        # Root layout with providers
│   └── page.tsx          # Homepage
├── components/
│   ├── ui/               # shadcn/ui components
│   └── Navigation.tsx    # Role-based navigation
├── contexts/
│   ├── AuthContext.tsx   # Authentication state
│   └── ThemeProvider.tsx # Theme management
├── hooks/
│   └── use-toast.ts      # Toast notifications
└── lib/
    └── utils.ts          # Utility functions
```

## 🛠️ Tech Stack

### Core
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling

### UI Components
- **[shadcn/ui](https://ui.shadcn.com/)** - Accessible component library
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon set
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI primitives

### Development
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing

## 📖 Usage Guide

### For Managers

1. **Login** with manager credentials
2. **View Dashboard** - Get overview of inventory health
3. **Manage Products** - Navigate to products page
4. **Add New Products** - Click "Add Product" button
5. **Monitor Trends** - Check monthly analytics
6. **Toggle Theme** - Switch between light/dark mode

### For Store Keepers

1. **Login** with store keeper credentials
2. **View Products** - See complete product catalog
3. **Search Products** - Use search bar to filter
4. **Update Inventory** - Edit existing products
5. **Add New Items** - Create new product entries

## 🎨 Customization

### Color Scheme
Modify `src/app/globals.css` to customize the color palette:
```css
:root {
  --primary: oklch(0.6 0.2 250);  /* Vibrant blue */
  --secondary: oklch(0.65 0.2 320); /* Purple accent */
  /* Add your custom colors */
}
```

### Theme Tokens
All design tokens are defined in the `@theme` directive for easy customization.

## 🔒 Security Notes

⚠️ **Important:** This is a demo application with client-side authentication.

**For Production:**
- Implement server-side authentication (NextAuth.js, Auth0, etc.)
- Use secure HTTP-only cookies for session management
- Add CSRF protection
- Implement rate limiting
- Use environment variables for sensitive data
- Add proper database integration
- Implement data validation and sanitization



## 📝 API Routes

### Authentication
- `POST /api/auth/login` - User login

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics

### Products
- `GET /api/products` - List all products
- `POST /api/products` - Create new product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
