import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  metadataBase: new URL('https://abhayjain.net'),
  title: 'Abhay Jain — Senior Director, Power & Analog at Renesas',
  description: 'Abhay Jain leads Renesas Electronics’ Power & Analog business in India. His experience spans semiconductors, management consulting, energy, and industrial engineering.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Abhay Jain — Senior Director, Power & Analog at Renesas',
    description: 'Abhay Jain leads Renesas Electronics’ Power & Analog business in India.',
    url: 'https://abhayjain.net',
    siteName: 'Abhay Jain',
    type: 'website',
    images: [{
      url: '/Abhay_Jain_profile_pic.jpg',
      width: 400,
      height: 400,
      alt: 'Abhay Jain',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhay Jain — Senior Director, Power & Analog at Renesas',
    description: 'Abhay Jain leads Renesas Electronics’ Power & Analog business in India.',
    images: ['/Abhay_Jain_profile_pic.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
