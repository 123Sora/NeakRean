import React, { useEffect } from 'react';

interface SecurityProviderProps {
  children: React.ReactNode;
}

function SecurityProvider({ children }: SecurityProviderProps) {
  useEffect(() => {
    // Content Security Policy
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https:; frame-src 'self';";
    document.head.appendChild(meta);

    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.keyCode === 123) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+S (Save Page)
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable drag and drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    // Detect developer tools
    let devtools = {
      open: false,
      orientation: null as string | null
    };

    const threshold = 160;

    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true;
          console.clear();
          console.log('%c⚠️ ការព្រមាន / Warning', 'color: red; font-size: 30px; font-weight: bold;');
          console.log('%cនេះជាមុខងារសម្រាប់អ្នកអភិវឌ្ឍន៍។ ការប្រើប្រាស់មិនត្រឹមត្រូវអាចបង្កគ្រោះថ្នាក់ដល់ប្រព័ន្ធ។', 'color: red; font-size: 16px;');
          console.log('%cThis is a browser feature intended for developers. Misuse could harm the system.', 'color: red; font-size: 16px;');
        }
      } else {
        devtools.open = false;
      }
    }, 500);

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  // XSS Protection
  useEffect(() => {
    // Override console methods in production
    if (process.env.NODE_ENV === 'production') {
      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
      console.info = () => {};
      console.debug = () => {};
    }

    // Prevent iframe embedding (Clickjacking protection)
    if (window.self !== window.top) {
      const topHref = window.top!.location.href ?? window.location.href; // Fallback to current location if undefined
      const selfHref = window.self.location.href ?? window.location.href; 
      if (topHref && selfHref) {
        window.top!.location.href = selfHref; // Assign only if both are defined
      }
    }

    // Add security headers via meta tags
    const securityMetas = [
      { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      { name: 'robots', content: 'noindex, nofollow' },
      { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
      { httpEquiv: 'X-Frame-Options', content: 'DENY' },
      { httpEquiv: 'X-XSS-Protection', content: '1; mode=block' },
    ];

    securityMetas.forEach(meta => {
      const metaElement = document.createElement('meta');
      if ('name' in meta) {
        metaElement.name = meta.name as string; // Explicitly cast to string
      }
      if ('httpEquiv' in meta) {
        metaElement.httpEquiv = meta.httpEquiv as string; 
      }
      metaElement.content = meta.content;
      document.head.appendChild(metaElement);
    });
  }, []);

  return <>{children}</>;
}

export default SecurityProvider;