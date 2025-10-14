// import '../styles/global.css';

// import type { Metadata } from 'next';

// import { AppConfig } from '../utils/AppConfig';

// export const metadata: Metadata = {
//   title: AppConfig.title,
//   description: AppConfig.description,
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang={AppConfig.locale}>
//       <body className="text-gray-600 antialiased">{children}</body>
//     </html>
//   );
// }

import '../styles/global.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { AppConfig } from '../utils/AppConfig';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-gray-600 antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
