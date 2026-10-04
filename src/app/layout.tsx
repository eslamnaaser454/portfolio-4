import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://eslam-nasser.dev'),
  title: 'Eslam Nasser | Software Engineer & DEPI Technical Trainer (AAST 3.53 GPA)',
  description:
    'Official portfolio of Eng. Eslam Nasser - Software Engineer, DEPI Technical Trainer under MCIT Egypt, and AASTMT Honors Graduate (3.53 GPA). Specializing in Next.js 15, React 19, TypeScript, Node.js, and scalable web architectures.',
  keywords: [
    'Eslam Nasser',
    'Software Engineer',
    'DEPI Trainer',
    'Digital Egypt Pioneers Initiative',
    'AASTMT',
    'AAST Computer Science',
    'Full-Stack Developer',
    'Next.js Developer Egypt',
    'React Developer',
    'Node.js Developer',
    'Web Architecture',
  ],
  authors: [{ name: 'Eslam Nasser', url: 'https://github.com/eslamnaaser454' }],
  creator: 'Eslam Nasser',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eslam-nasser.dev',
    title: 'Eslam Nasser | Software Engineer & DEPI Technical Trainer',
    description:
      'AASTMT Honors Graduate (GPA 3.53) & DEPI Technical Trainer empowering 500+ engineers across Egypt with modern Next.js and full-stack software development.',
    siteName: 'Eslam Nasser Portfolio',
    images: [
      {
        url: '/avatar.jpg',
        width: 800,
        height: 800,
        alt: 'Eslam Nasser - Software Engineer & DEPI Trainer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eslam Nasser | Software Engineer & DEPI Technical Trainer',
    description:
      'Software Engineer, DEPI Technical Trainer, and AASTMT Honors Graduate (3.53 GPA).',
    images: ['/avatar.jpg'],
  },
  icons: {
    icon: '/avatar.jpg',
  },
};

export const viewport: Viewport = {
  themeColor: '#080c14',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/avatar.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
