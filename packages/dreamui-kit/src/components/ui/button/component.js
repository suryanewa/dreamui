/**
 * DreamUI Button JavaScript Behavior
 * 
 * Optional JavaScript for enhanced button functionality.
 */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn').forEach(button => {
    // Handle loading state
    const setLoading = (isLoading) => {
      button.setAttribute('data-loading', isLoading);
      button.disabled = isLoading;
      button.setAttribute('aria-busy', isLoading);
    };

    // Expose loading API
    button.setLoading = setLoading;

    // Emit custom events
    button.addEventListener('click', (e) => {
      if (button.disabled || button.getAttribute('data-loading') === 'true') {
        e.preventDefault();
        return;
      }
      
      button.dispatchEvent(new CustomEvent('btn:click', {
        bubbles: true,
        detail: { originalEvent: e }
      }));
    });
  });
});

// Export for programmatic use
export function createButton(config) {
  const button = document.createElement('button');
  button.className = 'btn';
  
  if (config.variant) button.setAttribute('data-variant', config.variant);
  if (config.size) button.setAttribute('data-size', config.size);
  if (config.fullWidth) button.setAttribute('data-full-width', 'true');
  if (config.disabled) {
    button.disabled = true;
    button.setAttribute('data-disabled', 'true');
  }
  
  button.textContent = config.label || '';
  
  return button;
}
