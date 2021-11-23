export interface DefaultListParams {
  _page: number;
  _limit: number;
  _sort: string[];
  _order: 'desc' | 'asc' | '';
  q?: string; // full text search
}
