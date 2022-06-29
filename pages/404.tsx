import type { NextPage } from 'next';
import Layout from 'components/Templates/Layout';

const NotFound: NextPage = () => {
  console.log('funca');
  return (
    <Layout
      title="Estela estudio digital"
      description="No Funca!"
      container
    >
      <div className="row content-wrapper align-items-center">
        <div className="col">
          <h1 className="text-center">404</h1>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
