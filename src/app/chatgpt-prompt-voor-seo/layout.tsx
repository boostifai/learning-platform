import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chatgpt Prompt voor SEO | Boostifai',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
