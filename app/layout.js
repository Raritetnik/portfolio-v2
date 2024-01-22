import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/app/layouts/Navigation'
import Footer from "@/app/layouts/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mykhael Kuzmin | Full Stack Web Developer',
  description: 'Mykhael Kuzmin | Full Stack Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <link rel="icon" href="/icon.png" sizes="any" />
      <body className={inter.className}>
        <Navigation />
          {children}
        <Footer/>
        </body>
    </html>
  )
}
