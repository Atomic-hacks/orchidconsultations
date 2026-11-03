import { useEffect, useRef, useState } from 'react';
import { ShieldAlert, X } from 'lucide-react';

const storageKey = 'orchid-fraud-alert-shown-v1';

export function FraudAlert() {
  const dialog = useRef<HTMLDialogElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(() => {
    try { return localStorage.getItem(storageKey) !== 'true'; }
    catch { return true; }
  });
  useEffect(() => {
    if (!visible) return;
    const element = dialog.current;
    const timer = window.setTimeout(() => {
      element?.showModal();
      title.current?.focus();
      try { localStorage.setItem(storageKey, 'true'); } catch { /* Storage may be disabled. */ }
    }, 800);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.clearTimeout(timer);
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);
  const dismiss = () => setVisible(false);
  if (!visible) return null;
  return <dialog ref={dialog} className="fraud-alert" aria-labelledby="fraud-alert-title" aria-describedby="fraud-alert-message" onCancel={event => { event.preventDefault(); dismiss(); }}>
    <button type="button" className="fraud-alert-close" onClick={dismiss} aria-label="Close fraud alert"><X size={22} /></button>
    <h2 ref={title} id="fraud-alert-title" tabIndex={-1}><ShieldAlert size={28} aria-hidden="true" />Fraud Alert</h2>
    <div id="fraud-alert-message">
      <p><strong>Orchiddigital Consulting Limited</strong> does not request funds through unofficial channels, social media messages, or personal accounts. All transactions are conducted only via our official website and authorized platforms.</p>
      <p>We will never request sensitive information, such as passwords, OTPs, or personal banking details, via email, phone calls, or messaging apps.</p>
      <p>Please verify all communications with Orchiddigital Consulting Limited and report any suspicious activity immediately.</p>
    </div>
    <button type="button" className="fraud-alert-understand" onClick={dismiss}>I Understand</button>
  </dialog>;
}
