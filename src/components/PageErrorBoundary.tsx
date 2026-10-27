import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { contact } from '../data/site';

/** Keep navigation and contact alternatives available if a route chunk fails. */
export class PageErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Page failed to load', error, info);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return <section className="wrap page-load-error" role="alert">
      <h1>This page could not load.</h1>
      <p>Please reload the page to try again. You can also contact our team directly.</p>
      <div className="hero-actions">
        <button className="signature-button button-dark" onClick={() => window.location.reload()}>Reload page</button>
        <a className="signature-button button-outline" href={`mailto:${contact.email}`}>Email Orchid</a>
      </div>
    </section>;
  }
}
