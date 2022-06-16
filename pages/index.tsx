import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from 'components/Templates/Layout';

const Home: NextPage = () => (
  <Layout
    title="Estela estudio digital"
    description="Financiamos tu adquisición de activos fijos"
    className="container-fluid"
  >
    <section className="bg-primary-gradient">
      <div className="container ">
        <div className="row align-items-center content-wrapper">
          <div className="col-md-6">
            <Image src="/assets/img/girl.png" alt="girl" width={700} height={788} objectFit="contain" layout="responsive" />
          </div>
          <div className="col-md-6">
            <h1 className="display-font display-1">Digital Marketing Services </h1>
            <p>
              Ensuring the best return on investment
              {' '}
              for your bespoke SEO campaign requirement.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
