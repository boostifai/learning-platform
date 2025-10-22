import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chatgpt Prompt for SEO | Boostifai',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
