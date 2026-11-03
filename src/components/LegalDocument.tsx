import { Fragment } from 'react';
import { PageHeader } from './PageHeader';
import { images } from '../data/images';

function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => part.startsWith('**') ? <strong key={index}>{part.slice(2, -2)}</strong> : <Fragment key={index}>{part}</Fragment>);
}

export function LegalDocument({ title, intro, content }: { title: string; intro: string; content: string }) {
  const blocks = content.trim().split(/\n\s*\n/);
  const entries = blocks.flatMap((block, index) => block.startsWith('## ') ? [{ title: block.slice(3), id: `section-${index}` }] : []);
  return <><PageHeader eyebrow="Legal & Policies" title={title} intro={intro} image={images.pageHeaders.privacy} />
    <div className="wrap privacy-layout">
      <nav className="privacy-contents" aria-label={`${title} contents`}><h2>On this page</h2>{entries.map(entry => <a key={entry.id} href={`#${entry.id}`}>{entry.title}</a>)}</nav>
      <article className="privacy-body legal-body">{blocks.map((block, index) => {
        if (block.startsWith('### ')) return <h3 key={index}>{inline(block.slice(4))}</h3>;
        if (block.startsWith('## ')) return <h2 key={index} id={`section-${index}`}>{inline(block.slice(3))}</h2>;
        if (block.startsWith('- ')) return <ul key={index}>{block.split('\n').map((line, itemIndex) => <li key={itemIndex}>{inline(line.replace(/^- /, ''))}</li>)}</ul>;
        return <p key={index}>{inline(block.replace(/\n/g, ' '))}</p>;
      })}</article>
    </div>
  </>;
}
