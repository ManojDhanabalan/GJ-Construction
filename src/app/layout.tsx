import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GJ Construction | We Build Trust',
  description: 'GJ Construction is a premier civil construction company based in Tamil Nadu, delivering high-quality construction services that combine durability, innovation, and affordability.',
  keywords: 'civil construction, builders, house construction, villa construction, turnkey projects, Tamil Nadu, Bhavani',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
