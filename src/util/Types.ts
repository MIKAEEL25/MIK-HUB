export interface search {
  searchTerm: string | undefined;
  signal?: AbortSignal;
  sort: string
}