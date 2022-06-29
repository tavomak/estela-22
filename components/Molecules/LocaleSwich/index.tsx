import { useRouter } from 'next/router';
import Link from 'next/link';

const LangSwich = () => {
  const { locale: activeLocale, locales, asPath } = useRouter();

  const avaiableLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <>
      {avaiableLocales.map((locale) => (
        <li key={locale} className="py-2">
          <Link href={asPath} locale={locale}>
            <a href="!#">
              {locale.toUpperCase()}
            </a>
          </Link>
        </li>
      ))}
    </>
  );
};

export default LangSwich;
