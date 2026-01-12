# Button Component

A versatile button component for triggering actions with multiple variants, sizes, and states.

## Usage

```html
<!-- Primary button -->
<button class="btn" data-variant="primary">Click me</button>

<!-- Secondary button -->
<button class="btn" data-variant="secondary">Cancel</button>

<!-- With loading state -->
<button class="btn" data-variant="primary" data-loading="true">Loading...</button>
```

## Props / Attributes

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-variant` | `primary`, `secondary`, `ghost`, `danger`, `success` | `primary` | Visual style |
| `data-size` | `sm`, `md`, `lg` | `md` | Button size |
| `disabled` | boolean | false | Disables the button |
| `data-loading` | boolean | false | Shows loading spinner |
| `data-full-width` | boolean | false | Makes button full width |

## JavaScript API

```javascript
const button = document.querySelector('.btn');

// Set loading state
button.setLoading(true);

// Listen for clicks
button.addEventListener('btn:click', (e) => {
  console.log('Button clicked!', e.detail.originalEvent);
});
```

## Accessibility

- **Role**: `button`
- **Keyboard**: `Enter` and `Space` activate the button
- **ARIA**: 
  - `disabled` maps to `aria-disabled`
  - `data-loading="true"` sets `aria-busy="true"`

## CSS Custom Properties

```css
.btn {
  --button-bg: var(--color-fg-accent);
  --button-fg: white;
  --button-radius: var(--radius-lg);
}
```

## Examples

### Icon Button
```html
<button class="btn btn--icon" data-variant="primary" aria-label="Add">
  <svg width="20" height="20" viewBox="0 0 24 24">...</svg>
</button>
```

### Full Width
```html
<button class="btn" data-variant="primary" data-full-width="true">
  Full Width Button
</button>
```
