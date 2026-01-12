/**
 * Button Component (React Wrapper)
 * 
 * React wrapper for the DreamUI button component.
 * Demonstrates the pattern for porting vanilla components to React.
 */

import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className="btn"
      data-variant={variant}
      data-size={size}
      data-loading={loading ? 'true' : undefined}
      data-full-width={fullWidth ? 'true' : undefined}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {children}
      <style>{`
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          border-radius: 12px;
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        .btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #8b5cf6;
        }
        .btn:disabled, .btn[data-loading="true"] {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .btn[data-variant="primary"] {
          background: #8b5cf6;
          color: white;
        }
        .btn[data-variant="secondary"] {
          background: #252525;
          color: white;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .btn[data-variant="ghost"] {
          background: transparent;
          color: white;
        }
        .btn[data-variant="danger"] {
          background: #ef4444;
          color: white;
        }
        .btn[data-variant="success"] {
          background: #22c55e;
          color: white;
        }
        .btn[data-size="sm"] {
          padding: 4px 12px;
          font-size: 14px;
        }
        .btn[data-size="md"] {
          padding: 8px 16px;
          font-size: 16px;
        }
        .btn[data-size="lg"] {
          padding: 12px 24px;
          font-size: 18px;
        }
        .btn[data-loading="true"] {
          color: transparent;
        }
        .btn[data-loading="true"]::after {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          border: 2px solid white;
          border-right-color: transparent;
          border-radius: 50%;
          animation: spin 0.5s linear infinite;
        }
        .btn[data-full-width="true"] {
          width: 100%;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
}
