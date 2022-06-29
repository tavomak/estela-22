import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import GeneralResult from 'components/Molecules/Audit/GeneralResult';

type Props = {
  url: string,
  device: string,
}

const revalidation = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

const fetcher = async (...args) => fetch(...args).then((res) => res.json());

// const fetcher = async (stringValue) => {
//   const res = await fetch(stringValue);
//   if (!res.ok) {
//     const error = new Error('An error occurred while fetching the data.');
//     error.info = await res.json();
//     error.status = res.status;
//     throw error;
//   }
//   return res.json();
// };

const category = 'category=performance&category=seo&category=accessibility&category=best_practices';

const Audit = ({ url, device = 'desktop' }: Props) => {
  const finalUrl = url.replace(/(^\w+:|^)\/\//, '');
  const { locale: activeLocale } = useRouter();
  const API = `${process.env.NEXT_PUBLIC_PAGE_SPEED_BASE_URL}?url=https://${finalUrl}&locale=${activeLocale}&${category}&strategy=${device}&key=${process.env.NEXT_PUBLIC_PAGE_SPEED_API_KEY}`;
  const { data, error } = useSWR(API, fetcher, revalidation);

  const [categories, setCategories] = useState([]);
  const [audit, setAudit] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (data && data.error) {
      setCategories(data);
      setErrorMessage(data.error.errors[0].message);
      return;
    }

    if (data) {
      console.log(data);
      setCategories(Object.entries(data.lighthouseResult.categories));
      setAudit(Object.entries(data.lighthouseResult.audits));
    }
  }, [data, error]);

  if (error) return <div>Ha habido un error con la url ingresada</div>;
  if (!data) return <div className="text-center"><iframe title="LoadingBar" src="https://giphy.com/embed/RHEqKwRZDwFKE" width="480" height="204" frameBorder="0" allowFullScreen /></div>;
  if (errorMessage.length > 0) return <div>{errorMessage}</div>;
  return (
    <>
      <GeneralResult categories={categories} />
      <ul>
        {audit.length > 0 && audit
          .filter((score) => (score[1].score < 0.7))
          .map((item) => (
            <li key={item[1].id}>
              <p>
                <b>{`${item[1].id}:  ${item[1].score}`}</b>
                <br />
                <span>
                  {`${item[1].title}: `}
                </span>
              </p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Audit;
