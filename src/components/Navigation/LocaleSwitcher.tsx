'use client';

import { useParams } from 'next/navigation';
import { Locale, useLocale, useTranslations } from 'next-intl';
import { ChangeEvent, useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { Globe } from 'lucide-react';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const locale = useLocale();
  const t = useTranslations('LocaleSwitcher');

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error: combinación válida de pathname + params
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <label
      className={`${isPending ? 'opacity-50 pointer-events-none transition-opacity' : ''} inline-flex items-center gap-x-1.5`}
    >
      <Globe size={16} />
      <span className="sr-only">{t('label')}</span>
      <select
        className="text-sm focus:outline-none cursor-pointer"
        defaultValue={locale}
        onChange={onSelectChange}
        disabled={isPending}
      >
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {t('locale', { locale: cur })}
          </option>
        ))}
      </select>
    </label>
  );
}
