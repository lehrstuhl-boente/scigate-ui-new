interface StoreEngine extends Engine {
  allResultsLoaded: boolean;
  resultsCount: number;
  totalResultsCount: number;
  checked: boolean;
  loading: boolean;
  error: boolean;
}
