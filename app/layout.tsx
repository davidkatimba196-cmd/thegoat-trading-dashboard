import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'THEGOAT | Deriv Third-Party Dashboard',
  description: 'Professional dark trading dashboard for portfolio, automation, and risk management workflows.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
