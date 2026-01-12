# Contributing to DreamUI

Thank you for your interest in contributing to DreamUI! This document outlines the process for contributing to this project.

## Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please report unacceptable behavior to developer@dreamui.dev.

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+
- Git

### Setting up your development environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/dreamui.git
   cd dreamui
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Create a branch for your changes:
   ```bash
   git checkout -b my-feature-branch
   ```

## Development Workflow

### 1. Pick an issue or create a new one

- Check the [issue tracker](https://github.com/dreamui/dreamui/issues) for existing issues
- If you find a bug or have a feature request, open a new issue
- Comment on the issue to let others know you're working on it

### 2. Make your changes

Follow the component structure when adding new components:

```
packages/dreamui-kit/src/components/<component-name>/
├── component.css      # Component styles
├── component.js       # Optional behavior (attribute-first)
├── demo.html          # Canonical example markup
├── variants.html      # Alternate states
├── meta.json          # Component metadata
└── README.md          # Usage documentation
```

### 3. Test your changes

- Run linting: `pnpm lint`
- Run tests: `pnpm test`
- Build the package: `pnpm build`

### 4. Commit your changes

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:
- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation only changes
- `style` - Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- `refactor` - A code change that neither fixes a bug nor adds a feature
- `perf` - A code change that improves performance
- `test` - Adding missing tests or correcting existing tests
- `chore` - Changes to the build process or auxiliary tools

Example:
```
feat(button): add loading state support

- Added loading attribute to button component
- Loading spinner automatically shows when attribute is present
- Button becomes disabled during loading state

Closes #123
```

### 5. Submit a Pull Request

1. Push your branch to your fork
2. Open a Pull Request against the `main` branch
3. Fill in the PR template with all required information
4. Wait for review and address any feedback

## Component Guidelines

### Attribute-First API

All components use attributes (not properties) as the primary API:

```html
<!-- ✅ Good - attribute-first -->
<dream-button variant="primary" size="large" disabled></dream-button>

<!-- ❌ Avoid - property-based only -->
<dream-button .variant="'primary'"></dream-button>
```

### Event-Driven JavaScript

Components enhance markup rather than owning it:

```javascript
// ✅ Good - event-driven
document.querySelectorAll('dream-button').forEach(button => {
  button.addEventListener('click', () => {
    button.setAttribute('loading', '');
  });
});

// ❌ Avoid - imperative ownership
class DreamButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }
}
```

### Accessibility

Every component must:
- Include `aria-*` attributes where appropriate
- Support keyboard navigation
- Include focus management
- Document accessibility notes in `meta.json`

## Design Tokens

When adding new design tokens:
1. Add to `packages/dreamui-kit/src/foundations/tokens/`
2. Update the CSS custom properties
3. Document usage in the relevant foundation README
4. Ensure tokens work in both light and dark themes

## Publishing

This project uses [Changesets](https://github.com/changesets/changesets) for versioning:

1. Make your changes
2. Run `pnpm changeset` to create a changeset file
3. Commit the changeset file
4. On merge to main, the CI will publish the package

## Questions?

- Open an issue for bug reports or feature requests
- Start a discussion for general questions
- Reach out to the team at developer@dreamui.dev
