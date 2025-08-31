# Finance Calculator Monorepo

A Turborepo monorepo setup with pnpm containing multiple React frontends and Express backend microservices for a comprehensive finance calculator application.

## Structure

```plaintext
finance-calculator-monorepo/
├── frontend/
│   ├── echarts-app/       # React Vite app with ECharts
│   └── recharts-app/      # React Vite app with ReCharts
├── backend/
│   ├── auth/             # Authentication service
│   └── calculation/      # Financial calculation service
├── packages/
│   └── ui/              # Shared UI components
├── package.json         # Root package.json with workspace scripts
├── pnpm-workspace.yaml  # pnpm workspace configuration
└── turbo.json          # Turborepo configuration
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

- **ECharts Frontend**: `http://localhost:3000` (React app with ECharts)
- **ReCharts Frontend**: `http://localhost:3002` (React app with ReCharts)
- **Auth Service**: `http://localhost:3001` (Authentication API)
- **Calculation Service**: `http://localhost:3003` (Financial calculations API)

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

## Apps & Services

### Frontend Applications

#### ECharts App (`frontend/echarts-app`)

- React 18 with TypeScript
- Vite for fast development and building
- ECharts for advanced data visualization
- Port: 3000

#### ReCharts App (`frontend/recharts-app`)

- React 18 with TypeScript
- Vite for fast development and building
- ReCharts for interactive financial charts
- Port: 3002

### Backend Services

#### Auth Service (`backend/auth`)

- Express.js with TypeScript
- Authentication and authorization
- CORS and Helmet for security
- Port: 3001

#### Calculation Service (`backend/calculation`)

- Express.js with TypeScript
- Financial calculation APIs (compound interest, simple interest, loan payments, etc.)
- CORS and Helmet for security
- Port: 3003
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
- ESLint 9.x with flat config is set up for each package with appropriate configurations
- Prettier is configured for consistent code formatting

## Git Hooks (Husky)

This repository uses [Husky](https://typicode.github.io/husky/) for git hooks:

- **Pre-commit**: Runs `lint-staged` to check code quality before commits
- **Lint-staged**: Automatically runs ESLint and Prettier on staged files

### What runs on pre-commit:

- ESLint with auto-fix on TypeScript/JavaScript files
- Prettier formatting on JSON, Markdown, and YAML files

The hooks ensure code quality and consistency across the entire monorepo.
