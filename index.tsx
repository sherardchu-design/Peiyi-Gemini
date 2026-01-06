import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Simple Error Boundary Component
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("React Error Boundary Caught:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#1a1a1a',
            color: '#ff6b81',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Courier New", monospace',
            textAlign: 'center',
            padding: '2rem'
        }}>
          <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>NG</h1>
          <h2 style={{fontSize: '1.5rem', marginBottom: '2rem', color: '#f5f5f5'}}>Scene Failed to Render</h2>
          <div style={{
              backgroundColor: '#2d2d2d',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              maxWidth: '800px',
              textAlign: 'left',
              border: '1px solid #ff6b81'
          }}>
            <p style={{marginBottom: '0.5rem', fontWeight: 'bold'}}>Error Details:</p>
            <pre style={{whiteSpace: 'pre-wrap', fontSize: '0.9rem', color: '#ccc'}}>
                {this.state.error?.toString()}
            </pre>
          </div>
          <button 
            onClick={() => window.location.reload()}
            style={{
                marginTop: '2rem',
                padding: '1rem 2rem',
                backgroundColor: '#f5f5f5',
                color: '#1a1a1a',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                textTransform: 'uppercase'
            }}
          >
            Retake Scene (Reload)
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

try {
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} catch (e) {
  console.error("Root Render Failed", e);
  // Throwing here ensures the global window.onerror catches it if React completely fails
  throw e; 
}