export default function getOriginURL(): string {
  if (typeof window !== 'undefined') {
    return `${new URL(document.URL).origin}/assets/dadosabertosdefeira.png`;
  }
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return process.env.NEXT_PUBLIC_VERCEL_URL;
  }
  if (process.env.NEXT_PUBLIC_URL) {
    return process.env.NEXT_PUBLIC_URL;
  }
  return '';
}