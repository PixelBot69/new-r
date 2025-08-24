import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RC Power Project Ltd.',
  description: 'Providing cutting-edge technology solutions for homes and businesses',
  icons: {
    icon: '/images.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        
        {/* Floating Social Dock - Appears on all pages */}

      </body>
    </html>
  );
}