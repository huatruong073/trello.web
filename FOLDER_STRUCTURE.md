# Cấu trúc dự án React Router v7 chuẩn

```
app/
├── app.css                    # Styling chung cho ứng dụng
├── root.tsx                   # Root layout (HTML structure) + ErrorBoundary
├── routes.ts                  # Định nghĩa các route chính
├── +types/                    # TypeScript types cho route modules
│   ├── root.d.ts             # Type definitions cho root route
│   └── [routeName].d.ts      # Type definitions cho route cụ thể
├── components/                # Shared components
│   ├── ui/                    # UI components (buttons, inputs, etc.)
│   └── layouts/              # Layout components
├── routes/                    # Route components
│   ├── _layout.tsx           # Shared layout cho các routes con
│   ├── home.tsx              # Home route (index)
│   ├── auth/                 # Auth routes
│   │   ├── login.tsx         # Login route
│   │   ├── register.tsx      # Register route
│   │   └── _layout.tsx       # Auth layout
│   └── [routeName]/          # Nested routes
│       ├── index.tsx         # Index route
│       └── $id.tsx           # Dynamic route
├── features/                  # Feature-specific components
│   └── [featureName]/        # Grouped by feature
│       ├── components/       # Feature components
│       ├── api.ts            # API functions
│       └── utils.ts          # Feature utilities
├── hooks/                    # Custom hooks
├── utils/                    # Utility functions
├── api/                      # API clients and functions
├── lib/                      # Third-party library wrappers
└── context/                  # React contexts
```

## Phân tích cấu trúc file chính

### 1. root.tsx

- Chứa HTML structure (html, head, body)
- Chứa global layout
- Định nghĩa ErrorBoundary
- Import global CSS
- Định nghĩa meta tags

### 2. routes.ts

- Định nghĩa route tree
- Import các route modules
- Cấu hình route với các options (index, loader, action...)

### 3. Route Module Structure

Mỗi route module nên có cấu trúc sau:

```tsx
// Exports
export function loader({ params, request }) {...}  // Data loading
export function action({ params, request }) {...}  // Form processing
export function headers({...}) {...}              // HTTP headers
export function meta({...}) {...}                // Meta tags
export function links() {...}                    // Document links

// Default export: Route component
export default function RouteComponent() {
  const data = useLoaderData();
  return <div>...</div>;
}
```

## Các khuyến nghị khác

1. Sử dụng nested routes để tái sử dụng layouts
2. Sử dụng cấu trúc thư mục theo route hierarchy
3. Tách biệt logic business và UI components
4. Sử dụng các hooks đặc biệt: useLoaderData, useActionData, useFetcher
5. Nên tạo custom hooks cho các tác vụ phức tạp
