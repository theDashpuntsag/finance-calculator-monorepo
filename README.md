# Finance Calculator Monorepo

A Turborepo monorepo setup with pnpm containing a React Vite frontend and Express backend for a finance calculator application.

## Structure

```plaintext
finance-calculator-monorepo/
├── apps/
│   ├── frontend/          # React Vite application
│   └── backend/           # Express.js API server
├── packages/
│   └── ui/               # Shared UI components
├── package.json          # Root package.json with workspace scripts
├── pnpm-workspace.yaml   # pnpm workspace configuration
└── turbo.json           # Turborepo configuration
```

## Prerequisites

- Node.js 18+
- pnpm 8.15.0+ (recommended: run `npm install -g pnpm` to install)

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Development

Run all apps in development mode:

```bash
pnpm dev
```

This will start:

- Frontend: `http://localhost:3000` (React Vite app)
- Backend: `http://localhost:3001` (Express API)

### Build

Build all packages and apps:

```bash
pnpm build
```

### Other Commands

```bash
# Run linting across all packages
pnpm lint

# Run type checking across all packages
pnpm type-check

# Run tests across all packages
pnpm test

# Clean build artifacts
pnpm clean
```

## Apps

### Frontend (`apps/frontend`)

- React 18 with TypeScript
- Vite for fast development and building
- ESLint for code quality

### Backend (`apps/backend`)

- Express.js with TypeScript
- CORS and Helmet for security
- Sample finance calculation endpoints

### UI Package (`packages/ui`)

- Shared React components
- TypeScript support
- Exported Button and Card components

## Package Manager

This monorepo uses [pnpm](https://pnpm.io/) with workspaces for efficient dependency management and [Turborepo](https://turbo.build/) for build orchestration and caching.

## Adding Dependencies

### Add to specific package

```bash
# Add to frontend
pnpm --filter @finance-calculator/frontend add <package>

# Add to backend
pnpm --filter @finance-calculator/backend add <package>

# Add to UI package
pnpm --filter @finance-calculator/ui add <package>
```

### Add to root (development dependencies)

```bash
pnpm add -D <package>
```

## Development Tips

- All packages share the same `node_modules` through pnpm workspaces
- Turborepo caches build outputs for faster subsequent builds
- TypeScript is configured across all packages with consistent settings
- ESLint is set up for each package with appropriate configurations
