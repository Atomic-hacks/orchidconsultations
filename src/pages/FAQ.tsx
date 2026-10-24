import { useState } from 'react';
import { Search } from 'lucide-react';
import { faq } from '../data/faq';
import { Heading } from '../components/Reveal';
import { Accordion } from '../components/Accordion';
import { Button } from '../components/Button';
import { PageHeader } from '../components/PageHeader';
import { images } from '../data/images';
export default function FAQ() {
  const [query, setQuery] = useState(''), [category, setCategory] = useState('all');
  const questions = faq.filter(f => (category === 'all' || f.category === category) && `${f.question} ${f.answer}`.toLowerCase().includes(query.toLowerCase()));
  return <><PageHeader eyebrow="01 / FAQ" title="Frequently asked questions." intro="Find answers to common questions about our services, processes, and how we can help your business grow." image={images.pageHeaders.faq} /><section className="wrap faq-layout"><aside><div className="search-field"><Search size={18} /><input aria-label="Search questions" placeholder="Search questions" value={query} onChange={e => setQuery(e.target.value)} /></div><div className="faq-filters" aria-label="Question category">{['all', ...new Set(faq.map(f => f.category))].map(c => <button className={category === c ? 'selected' : ''} aria-pressed={category === c} key={c} onClick={() => setCategory(c)}>{c === 'all' ? 'All Questions' : c}</button>)}</div></aside><div>{questions.map(f => <Accordion title={f.question} key={f.question}><p>{f.answer}</p></Accordion>)}{!questions.length && <div className="empty-state"><h2>No results found</h2><p>Try adjusting your search terms or browse different categories.</p></div>}</div></section><section className="section wrap faq-contact"><Heading>Still have questions?</Heading><p>Our expert team is here to provide personalized support and detailed answers.</p><Button to="/contact">Get in touch</Button></section></>;
}
