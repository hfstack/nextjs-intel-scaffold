import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { i18n, type Locale, getDictionary } from '@/dictionaries';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const params = await paramsPromise;
  const dict = await getDictionary(params.lang);

  return {
    title: {
      template: '%s | MD2Poster',
      default: 'MD2Poster',
    },
    description: dict.index.description,
    keywords: ['markdown', 'poster', 'converter', 'generator'],
    authors: [{ name: 'Your Name' }],
    openGraph: {
      title: dict.index.title,
      description: dict.index.description,
      url: `https://md2poster.vercel.app/${params.lang}`,
      siteName: 'MD2Poster',
      locale: params.lang,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      languages: Object.fromEntries(
        i18n.locales.map(locale => [
          locale,
          `https://md2poster.vercel.app/${locale}`,
        ])
      ),
    },
  };
}

export default async function LocaleLayout({
  children,
  params: paramsPromise,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await paramsPromise;

  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 