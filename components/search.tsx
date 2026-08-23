'use client';

import { create } from '@orama/orama';
import { useDocsSearch } from 'fumadocs-core/search/client';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search';

function initOrama() {
  return create({
    schema: { _: 'string' },
    // https://docs.orama.com/open-source/supported-languages
    language: 'english',
  });
}

// A thin customization over fumadocs-ui's default search dialog, still backed
// by Orama (via app/api/search/route.ts's staticGET) — `type: 'static'` fetches
// the whole pre-built index once and queries it client-side, since this site
// is a static export (`output: 'export'` in next.config.mjs) with no server
// to hit per-query.
export default function DefaultSearchDialog(props: SharedProps) {
  const { search, setSearch, query } = useDocsSearch({ type: 'static', initOrama });

  return (
    <SearchDialog search={search} onSearchChange={setSearch} isLoading={query.isLoading} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== 'empty' ? query.data : null} />
      </SearchDialogContent>
    </SearchDialog>
  );
}
