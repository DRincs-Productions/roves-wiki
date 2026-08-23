import { KofiIcon } from '@/components/ui/icons';
import { kofiUrl } from '@/lib/shared';

export function KofiButton() {
  return (
    <a href={kofiUrl} target="_blank" rel="noreferrer noopener" aria-label="Ko-fi">
      <KofiIcon className="h-6 w-auto" />
    </a>
  );
}
