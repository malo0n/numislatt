export function SearchParamsToFilters(searchParams: URLSearchParams): string {
  const queryParams: string[] = [];
  searchParams.forEach((value, key) => {
    if (value) {
      queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
  });
  return queryParams.length ? `?${queryParams.join("&")}` : "";
}