const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? '';
export function withAssetPrefix(path: string) {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  if (!prefix) return path;
  return `${prefix}${path.startsWith('/') ? path : `/${path}`}`;
}