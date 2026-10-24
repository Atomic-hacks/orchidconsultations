import { pageCopy } from '../data/pages';
import { CopyBlocks } from '../components/CopyBlocks';
import { PageHeader } from '../components/PageHeader';
import { images } from '../data/images';
export default function Privacy() { return <><PageHeader eyebrow="01 / Privacy" title="Privacy Policy" intro="Last updated: October 2025" image={images.pageHeaders.privacy} /><section className="wrap policy-content"><CopyBlocks blocks={pageCopy['/privacy'].slice(3)} /></section></>; }
