import type { Metadata } from "next";
import "../../styles/globals.css";
import { DM_Serif_Text, Inter } from 'next/font/google'
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "../components/Navbar";
import { fetchApi } from "@/lib/fetchApi";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Event Pro Gran Canaria",
  description: "Event Pro Gran Canaria is a leading event management company specializing in organizing and executing high-quality events in Gran Canaria. Our team of experts is dedicated to delivering exceptional experiences for our clients and their guests, ensuring every detail is meticulously planned and executed.",
};

const dmSerifText = DM_Serif_Text({
  weight: '400',
  subsets: ['latin'],
})

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})


export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const [{ items }]:any = await fetchApi({
    apiRoute: '/api/tree-menus/menu',
    locale,
    filters: {
      documentId: {
        $eq: 'wan65cr54i0uzw1doz6qv703',
      },
    },
  });


  return (
    <html lang={locale}>
      <body className={`${dmSerifText.className} ${inter.className}`}>
        <NextIntlClientProvider>
          <Navbar data={items} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
