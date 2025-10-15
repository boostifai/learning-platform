import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nano Banana Blog Image Guide | Boostifai',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
