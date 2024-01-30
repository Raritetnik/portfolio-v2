import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/app/[locale]/layouts/Navigation'
import Footer from "@/app/[locale]/layouts/Footer";

import {useLocale, useTranslations} from "next-intl";
import { notFound } from "next/navigation";
import translations from "@/messages/en.json";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mykhael Kuzmin | Full Stack Web Developer',
  description: 'Mykhael Kuzmin | Full Stack Web Developer',
}

export default function RootLayout({ children, params }) {
    const locale = useLocale();

    const tNavbar = useTranslations('Navbar');
    let transNavbar = {};
    Object.keys(translations.Navbar).forEach(el => {
        transNavbar[el] = tNavbar(el);
    });

    const tFooter = useTranslations('Footer');
    let transFooter = {};
    Object.keys(translations.Footer).forEach(el => {
        transFooter[el] = tFooter(el);
    });

    // Show a 404 error if the user requests an unknown locale
    if (params.locale !== locale) {
        notFound();
    }

  return (
    <html lang={locale}>
      <link rel="icon" href="/app/[locale]/icon.png" sizes="any" />
      <body className={inter.className}>
        <Navigation textes={transNavbar} />
          {children}
        <Footer textes={transFooter}/>
        </body>
    </html>
  )
}
