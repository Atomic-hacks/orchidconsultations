import { Heading } from '../components/Reveal';
import { Button } from '../components/Button';
// TODO: audited copy needed — approve the structural 404 message.
export default function NotFound() { return <section className="wrap page-hero not-found"><span className="error-number">404</span><Heading as="h1">Page not found.</Heading><p>The page you're looking for isn't here.</p><Button to="/">Back to home</Button></section>; }
