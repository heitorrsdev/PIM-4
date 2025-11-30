export function buildUrl(base: string, endpoint: string, ...params: (string | number)[]): string {
  let url = `${base}${endpoint}`;

  if (params.length > 0) {
    url = `${url}/${params.join('/')}`;
  }

  return url;
}
