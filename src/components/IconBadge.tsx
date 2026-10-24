import type { IconName } from '../data/icons';
import { iconMap } from '../lib/icons';

export function IconBadge({ icon, dark = false, label }: { icon: IconName; dark?: boolean; label?: string }) {
  const Icon = iconMap[icon];
  return <Icon className={`feature-icon${dark ? ' feature-icon-dark' : ''}`} size={23} strokeWidth={1.5} aria-hidden={label ? undefined : true} aria-label={label} />;
}
