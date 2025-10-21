import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LLM Geo Eboek | Boostifai',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
