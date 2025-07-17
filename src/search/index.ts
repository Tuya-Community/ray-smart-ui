import _Search from './Search';
import type { SmartSearch } from './PropTypes';

const Search = _Search as React.FC<SmartSearch>;

export { Search };

export * from './PropTypes';
