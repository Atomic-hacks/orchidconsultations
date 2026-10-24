import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Check, ArrowLeft } from 'lucide-react';
import { services } from '../data/services';
import { contact } from '../data/site';
import { Button } from './Button';
import { rise } from '../lib/motion';
const formSchema = z.object({
  name: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string(), phone: z.string(),
  service: z.string().min(1, 'Please select a service'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});
type FormValues = z.infer<typeof formSchema>;
interface FieldProps { name: Exclude<keyof FormValues, 'service'>; label: string; required?: boolean; register: UseFormRegister<FormValues>; errors: FieldErrors<FormValues>; multiline?: boolean }
function Field({ name, label, required, register, errors, multiline }: FieldProps) {
  const registration = register(name);
  const props = { ...registration, id: name, placeholder: ' ', 'aria-invalid': !!errors[name], 'aria-describedby': errors[name] ? `${name}-error` : undefined, autoComplete: name === 'name' ? 'name' : name === 'email' ? 'email' : name === 'phone' ? 'tel' : name === 'company' ? 'organization' : 'off' };
  return <div className={`floating-field ${multiline ? 'full-field' : ''}`}><label htmlFor={name}>{label}{required ? ' *' : ''}</label>{multiline ? <textarea {...props} rows={5} /> : <input {...props} type={name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'text'} />}{errors[name] && <p className="field-error" id={`${name}-error`}>{errors[name]?.message}</p>}</div>;
}
export function ContactForm({ initialService }: { initialService: string }) {
  const reduced = useReducedMotion(); const [status, setStatus] = useState<'idle' | 'prepared' | 'sent'>('idle'), [error, setError] = useState(''), [draft, setDraft] = useState('');
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(formSchema), defaultValues: { name: '', email: '', company: '', phone: '', service: initialService, subject: '', message: '' } });
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
  const submit = async (values: FormValues) => {
    setError('');
    if (!endpoint) { const body = `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company}\nPhone: ${values.phone}\nService: ${values.service}\n\n${values.message}`; setDraft(`mailto:${contact.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`); setStatus('prepared'); return; }
    try { const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(values), signal: AbortSignal.timeout(15000) }); if (!response.ok) throw new Error('Submission failed'); setStatus('sent'); reset(); } catch { setError('Your message could not be sent. Please try again or contact us by email.'); }
  };
  // TODO: audited copy needed — approve operational form labels for the email-draft fallback and delivery errors.
  // TODO: Configure VITE_CONTACT_ENDPOINT to enable verified server-side delivery; the fallback prepares an email, never claims it was sent.
  return <AnimatePresence mode="wait" initial={false}>{status !== 'idle' ? <motion.div key="success" className="form-success" role="status" variants={rise} initial={reduced ? false : 'hidden'} animate="visible"><Check size={32} strokeWidth={1.3} /><h2>{status === 'sent' ? 'Message Sent!' : 'Your enquiry is ready.'}</h2><p>{status === 'sent' ? "Thank you for your message! We'll get back to you within 24 hours. Our team is excited to help you with your business needs." : 'Open your email app to review and send your enquiry.'}</p>{status === 'prepared' && <Button href={draft}>Open email draft</Button>}<button className="back-link mt-8" onClick={() => setStatus('idle')}><ArrowLeft size={16} />Back to form</button></motion.div> : <motion.form key="form" noValidate onSubmit={handleSubmit(submit)} className="contact-form" variants={rise} initial={false} animate="visible"><div className="form-grid"><Field name="name" label="Full Name" required register={register} errors={errors} /><Field name="email" label="Email Address" required register={register} errors={errors} /><Field name="company" label="Company Name" register={register} errors={errors} /><Field name="phone" label="Phone Number" register={register} errors={errors} /><div className="select-field full-field"><label htmlFor="service">Service Interest *</label><select id="service" {...register('service')} aria-invalid={!!errors.service} aria-describedby={errors.service ? 'service-error' : undefined}><option value="">Select a service</option>{services.map(s => <option value={s.slug} key={s.slug}>{s.title}</option>)}<option value="general">General Inquiry</option></select>{errors.service && <p className="field-error" id="service-error">{errors.service.message}</p>}</div><Field name="subject" label="Subject" required register={register} errors={errors} /><Field name="message" label="Message" required multiline register={register} errors={errors} /></div>{error && <p role="alert" className="field-error">{error} <a className="underline" href={`mailto:${contact.email}`}>Email Us</a></p>}<Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : endpoint ? 'Send Message' : 'Prepare enquiry'}</Button></motion.form>}</AnimatePresence>;
}
