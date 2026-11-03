import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Container, Section } from '../components/SectionLayout';
import { images } from '../data/images';
import { contact } from '../data/site';

export default function Feedback() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'prepared' | 'sent'>('idle');
  const [draft, setDraft] = useState('');
  const [error, setError] = useState('');
  const endpoint = (import.meta.env.VITE_FEEDBACK_ENDPOINT || import.meta.env.VITE_CONTACT_ENDPOINT) as string | undefined;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const subject = `[${data.type}] ${data.subject}`;
    const message = `Type of feedback: ${data.type}\n\n${data.message}`;
    setError('');
    if (!endpoint) {
      const body = `Full name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\n\n${message}`;
      setDraft(`mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      setStatus('prepared');
      return;
    }
    setStatus('sending');
    try {
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, company: '', service: 'general', subject, message }), signal: AbortSignal.timeout(15000) });
      if (!response.ok) throw new Error('Feedback could not be delivered.');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('idle');
      setError('Your feedback could not be sent. Please try again or email us directly.');
    }
  }
  return <><PageHeader eyebrow="Feedback & Complaints" title="Feedback & Complaints" intro="We value your feedback and are committed to addressing your concerns." image={images.pageHeaders.contact} />
    <Section className="feedback-page"><Container><div className="contact-layout-v2">
      <div className="contact-form-panel"><h2>Submit Your Feedback</h2>
        {status === 'sent' || status === 'prepared' ? <div className="form-success" role="status"><h3>{status === 'sent' ? 'Thank you for your feedback.' : 'Your feedback is ready to send.'}</h3><p>{status === 'sent' ? 'Your feedback has been submitted to our team.' : 'Open your email app to review and send your feedback. It has not been sent yet.'}</p>{status === 'prepared' && <a className="signature-button button-dark" href={draft}>Open email draft</a>}<button type="button" className="text-button" onClick={() => setStatus('idle')}>Submit more feedback</button></div> : <form className="contact-form" onSubmit={submit}>
          <div className="form-grid">
            <div className="floating-field"><label htmlFor="feedback-name">Full Name *</label><input id="feedback-name" name="name" autoComplete="name" required /></div>
            <div className="floating-field"><label htmlFor="feedback-email">Email Address *</label><input id="feedback-email" name="email" type="email" autoComplete="email" required /></div>
            <div className="floating-field"><label htmlFor="feedback-phone">Phone Number (Optional)</label><input id="feedback-phone" name="phone" type="tel" autoComplete="tel" /></div>
            <div className="select-field"><label htmlFor="feedback-type">Type of Feedback *</label><select id="feedback-type" name="type" defaultValue="" required><option value="" disabled>Select type...</option>{['General Feedback', 'Complaint', 'Service Issue', 'Investment Query', 'Compliment'].map(type => <option key={type}>{type}</option>)}</select></div>
            <div className="floating-field full-field"><label htmlFor="feedback-subject">Subject *</label><input id="feedback-subject" name="subject" required /></div>
            <div className="floating-field full-field"><label htmlFor="feedback-message">Detailed Message *</label><textarea id="feedback-message" name="message" rows={6} required /></div>
          </div>
          <p className="feedback-consent">By submitting this form, you agree to our <Link to="/privacy">Privacy Policy</Link>.</p>
          {error && <p role="alert" className="field-error">{error} <a href={`mailto:${contact.email}`}>Email us</a></p>}
          <button type="submit" className="signature-button button-dark" disabled={status === 'sending'}>{status === 'sending' ? 'Submitting…' : 'Submit Feedback'}</button>
        </form>}
      </div>
      <aside className="feedback-info"><section><h2>Share Your Thoughts</h2><p>Whether it's a compliment, suggestion, or complaint, we want to hear from you.</p></section><section><h2>Quick Response</h2><p>We respond to all feedback within 48 hours.</p></section><section><h2>Contact our team</h2><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p><p><a href={`tel:${contact.tel}`}>{contact.phone}</a></p></section></aside>
    </div></Container></Section>
  </>;
}
