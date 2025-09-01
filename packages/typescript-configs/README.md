# TypeScript Configurations

Shared TypeScript configurations for the finance calculator monorepo.

## Available Configurations

### 🎯 Base Configuration (`base.json`)

Foundation configuration with essential TypeScript settings:

- Strict mode enabled
- ES module interop
- Incremental compilation
- Essential compiler flags

### ⚛️ React Configuration (`react.json`)

Optimized for React/Vite applications:

- DOM and browser support
- JSX support with React
- Bundler module resolution
- Path mapping for imports
- Vite-specific optimizations
- Strict type checking

### 🚀 Express Configuration (`express.json`)

Optimized for Node.js/Express applications:

- Node.js target and libraries
- ES2022 modules
- Decorator support
- Path mapping for server structure
- Declaration file generation
- ts-node configuration

## Usage

### In Frontend Applications

```json
{
  "extends": "@finance-calculator/typescript-configs/react",
  "compilerOptions": {
    // Project-specific overrides
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### In Backend Services

```json
{
  "extends": "@finance-calculator/typescript-configs/express",
  "compilerOptions": {
    // Project-specific overrides
  },
  "include": ["src/**/*"],
  "exclude": ["dist", "node_modules"]
}
```

### Custom Extensions

You can extend and override any configuration:

```json
{
  "extends": "@finance-calculator/typescript-configs/react",
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/custom/*": ["./src/custom/*"]
    }
  }
}
```

## Key Features

### 🔒 **Strict Type Safety**

- `strict: true`
- `noImplicitAny: true`
- `noUncheckedIndexedAccess: true` (frontend)
- `exactOptionalPropertyTypes: true`

### 📁 **Path Mapping**

- Frontend: `@/*`, `@/components/*`, `@/utils/*`, `@/types/*`
- Backend: `@/*`, `@/controllers/*`, `@/services/*`, `@/models/*`, etc.

### ⚡ **Performance**

- `skipLibCheck: true`
- `incremental: true`
- Optimized for bundler tools

### 🎯 **Best Practices**

- Modern ES target (ES2020/ES2022)
- Source maps for debugging
- Declaration files for libraries
- Proper module resolution

## Upgrading

When updating these configurations:

1. Test with a single project first
2. Run `pnpm type-check` across all packages
3. Update package versions incrementally
4. Document breaking changes

## Dependencies

- **TypeScript**: >= 4.7.0
- **Frontend**: React-specific types
- **Backend**: Node.js types
