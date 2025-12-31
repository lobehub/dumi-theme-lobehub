import { SearchBar as Input } from '@lobehub/ui';
import { useSiteSearch } from 'dumi';
import { memo, useState } from 'react';

import SearchResult from '../SearchResult';
import { styles } from './style';

const SearchBar = memo(() => {
  const [focusing, setFocusing] = useState(false);
  const { keywords, setKeywords, result, loading } = useSiteSearch();

  return (
    <div className={styles.container}>
      <Input
        enableShortKey
        onBlur={() => {
          setTimeout(() => {
            setFocusing(false);
          }, 1);
        }}
        onChange={(e: any) => setKeywords(e.target.value)}
        onFocus={() => setFocusing(true)}
        shortKey={'k'}
        spotlight
        type={'block'}
      />

      {keywords.trim() && focusing && (result.length > 0 || !loading) && (
        <div className={styles.popover}>
          <SearchResult data={result} loading={loading} />
        </div>
      )}
    </div>
  );
});

export default SearchBar;
