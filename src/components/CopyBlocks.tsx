import { Link } from 'react-router-dom';
import type { CopyBlock } from '../data/pages';
export function CopyBlocks({ blocks }: { blocks: readonly CopyBlock[] }) {
  return <div className="copy-blocks">{blocks.map((block, i) => {
    if (block.kind === 'heading') return <h3 key={i}>{block.text}</h3>;
    const link = block.text.match(/^(.+) \((\/[^)]+|https?:\/\/[^)]+|mailto:[^)]+|tel:[^)]+)\)$/);
    if (link) return link[2].startsWith('/') ? <p key={i}><Link className="text-link underline" to={link[2]}>{link[1]}</Link></p> : <p key={i}><a className="underline" href={link[2]}>{link[1]}</a></p>;
    return <p key={i}>{block.text.replace(/^- /, '')}</p>;
  })}</div>;
}
