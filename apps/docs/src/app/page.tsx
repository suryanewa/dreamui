import Link from 'next/link';

const components = [
  { category: 'UI Components', items: [
    { name: 'Button', path: '/components/button', description: 'Versatile button with variants and states' },
    { name: 'Icon Button', path: '/components/icon-button', description: 'Icon-only buttons for actions' },
    { name: 'Link', path: '/components/link', description: 'Navigation links with styles' },
    { name: 'Badge', path: '/components/badge', description: 'Labels and status indicators' },
    { name: 'Chip', path: '/components/chip', description: 'Tags and selections' },
    { name: 'Avatar', path: '/components/avatar', description: 'User images and initials' },
    { name: 'Card', path: '/components/card', description: 'Content containers' },
    { name: 'Callout', path: '/components/callout', description: 'Alert messages' },
    { name: 'Divider', path: '/components/divider', description: 'Content separators' },
    { name: 'Modal', path: '/components/modal', description: 'Dialog windows' },
    { name: 'Drawer', path: '/components/drawer', description: 'Slide-out panels' },
    { name: 'Tabs', path: '/components/tabs', description: 'Tab navigation' },
    { name: 'Accordion', path: '/components/accordion', description: 'Collapsible sections' },
  ]},
  { category: 'Form Components', items: [
    { name: 'Input', path: '/components/input', description: 'Text inputs' },
    { name: 'Textarea', path: '/components/textarea', description: 'Multi-line inputs' },
    { name: 'Select', path: '/components/select', description: 'Dropdown selects' },
    { name: 'Checkbox', path: '/components/checkbox', description: 'Checkboxes' },
    { name: 'Radio', path: '/components/radio', description: 'Radio buttons' },
    { name: 'Switch', path: '/components/switch', description: 'Toggle switches' },
    { name: 'Slider', path: '/components/slider', description: 'Range sliders' },
    { name: 'Field', path: '/components/field', description: 'Input wrappers' },
    { name: 'Label', path: '/components/label', description: 'Form labels' },
  ]},
  { category: 'Layout', items: [
    { name: 'Container', path: '/components/container', description: 'Width containers' },
    { name: 'Stack', path: '/components/stack', description: 'Stack layouts' },
    { name: 'Grid', path: '/components/grid', description: 'Grid layouts' },
    { name: 'Glass Panel', path: '/components/glass-panel', description: 'Glassmorphism panels' },
  ]},
  { category: 'Feedback', items: [
    { name: 'Progress', path: '/components/progress', description: 'Progress bars' },
    { name: 'Spinner', path: '/components/spinner', description: 'Loading spinners' },
    { name: 'Skeleton', path: '/components/skeleton', description: 'Loading placeholders' },
    { name: 'Toast', path: '/components/toast', description: 'Notifications' },
    { name: 'Banner', path: '/components/banner', description: 'Alert banners' },
  ]},
  { category: 'Effects', items: [
    { name: 'Glow', path: '/components/glow', description: 'Glow effects' },
    { name: 'Shimmer', path: '/components/shimmer', description: 'Shimmer loading' },
    { name: 'Blur Orb', path: '/components/blur-orb', description: 'Blur orb effects' },
  ]},
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 24px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f0f 100%)'
      }}>
        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: '800',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #fff 0%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          DreamUI
        </h1>
        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: 'rgba(255,255,255,0.7)',
          maxWidth: '600px',
          margin: '0 auto 32px',
          lineHeight: '1.6'
        }}>
          A comprehensive UI system with vanilla Web Components and React wrappers. 
          Beautiful, accessible, and production-ready.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#components" className="btn" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: '#8b5cf6',
            color: 'white',
            borderRadius: '8px',
            fontWeight: '600',
            textDecoration: 'none'
          }}>
            Browse Components
          </a>
          <a href="https://github.com/dreamui/dreamui" target="_blank" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            borderRadius: '8px',
            fontWeight: '600',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            GitHub
          </a>
        </div>
      </section>

      {/* Components Grid */}
      <section id="components" style={{ padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        {components.map((category) => (
          <div key={category.category} style={{ marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
              {category.category}
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px'
            }}>
              {category.items.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  style={{
                    display: 'block',
                    padding: '20px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: 'white' }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 24px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '14px'
      }}>
        <p>DreamUI - MIT License</p>
      </footer>
    </div>
  );
}
