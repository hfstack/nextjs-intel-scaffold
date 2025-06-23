import { getDictionary, type Locale } from '@/dictionaries';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

// 生成页面特定的元数据
export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const params = await paramsPromise;
  const dict = await getDictionary(params.lang);

  return {
    title: dict.index.title,
    description: dict.index.description,
  };
}

export default async function Home({
  params: paramsPromise,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const params = await paramsPromise;
  const dict = await getDictionary(params.lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold">{dict.index.title}</h1>
        <p className="mt-4 text-xl">{dict.index.description}</p>
        <Button className="mt-4">{dict.index.getStarted}</Button>
      </div>
    </main>
  );
} 