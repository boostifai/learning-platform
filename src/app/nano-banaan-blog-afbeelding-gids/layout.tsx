import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nano Banaan Blog Afbeelding Gids | Boostifai',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
