import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Checklist Guide | Boostifai',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
