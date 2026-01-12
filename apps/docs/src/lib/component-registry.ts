/**
 * Component Registry
 * 
 * Maps component names to their built assets for the docs site.
 * This allows the docs to dynamically load component CSS/JS.
 */

export interface ComponentRegistryEntry {
  name: string;
  category: string;
  css: string;
  js?: string;
  dependencies?: string[];
}

export const componentRegistry: Record<string, ComponentRegistryEntry> = {
  button: {
    name: 'button',
    category: 'ui',
    css: '/components/button/component.css',
  },
  badge: {
    name: 'badge',
    category: 'ui',
    css: '/components/badge/component.css',
  },
  card: {
    name: 'card',
    category: 'ui',
    css: '/components/card/component.css',
  },
  input: {
    name: 'input',
    category: 'forms',
    css: '/components/input/component.css',
  },
  // Add more components as they are built
};

export function getComponentAssets(componentName: string) {
  return componentRegistry[componentName] || null;
}

export function getAllComponents() {
  return Object.values(componentRegistry);
}

export function getComponentsByCategory(category: string) {
  return Object.values(componentRegistry).filter(c => c.category === category);
}
