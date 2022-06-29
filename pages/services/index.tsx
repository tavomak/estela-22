import { useRouter } from 'next/router';
// import useTranslation from 'next-translate/useTranslation';
import Layout from 'components/Templates/Layout';
import NotFound from '../404';

const Services = () => {
  // const { t } = useTranslation('services');
  const router = useRouter();
  const { locale } = router;
  const { service } = router.query;

  const supportedRoutes = ['en/services', 'es/servicios'];
  if (!supportedRoutes.some((item) => item === `${locale}/${service}`)) return <NotFound />;

  return (
    <Layout
      title="Estela estudio digital"
      description="No Funca!"
      container
    >
      <div className="row content-wrapper align-items-center">
        <div className="col">
          <h1>
            Service:
            {' '}
            {service}
          </h1>
          <h1>
            Title:
            {' '}
            {/* {t('page_title')} */}
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
