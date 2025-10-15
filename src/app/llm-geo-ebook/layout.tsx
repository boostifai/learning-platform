import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LLM Geo Ebook | Boostifai',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
