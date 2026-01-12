# DreamUI

A comprehensive, publishable UI system with vanilla Web Components and React wrappers.

## Vision

DreamUI is a "dream" UI system that:
- Uses vanilla HTML/CSS/JS as the source of truth
- Provides attribute-first APIs for easy React integration
- Maintains perfect parity between vanilla and React components
- Includes a live documentation gallery for instant visual feedback

## Packages

### `packages/dreamui-kit`
The canonical source of all components. Contains:
- **foundations/** - Design tokens, themes, typography, spacing, colors, etc.
- **components/** - Individual component folders with demo.html, variants.html, meta.json
- **utils/** - Shared utilities for accessibility, focus management, etc.

### `packages/dreamui-react` (coming soon)
React wrappers around dreamui-kit components for seamless React integration.

### `apps/docs`
The public-facing documentation site and component gallery.

## Quick Start

### Prerequisites
- Node.js 20+
- pnpm 9+

### Option 1: Using Mise (Recommended)

```bash
# Install mise if not already installed
curl https://mise.run | sh

# Install dependencies (auto-installs node 20 and pnpm 9)
mise install

# Start development
mise run dev
```

### Option 2: Using Node/npm directly

```bash
# Clone the repository
git clone https://github.com/suryanewa/dreamui.git
cd dreamui

# Install dependencies
pnpm install

# Start development
pnpm dev
```

## Documentation

Visit [https://dreamui.xyz](https://dreamui.xyz) for the full documentation.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development servers for all packages |
| `pnpm build` | Build all packages |
| `pnpm lint` | Lint all packages |
| `pnpm format` | Format code with Prettier |
| `pnpm test` | Run tests |
| `pnpm check` | Run type checking and linting |

## Contributing

Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

DreamUI is [MIT licensed](LICENSE).
