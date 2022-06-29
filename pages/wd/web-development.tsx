import { useState } from 'react';
import type { NextPage } from 'next';
import Layout from 'components/Templates/Layout';
import FormAudit from 'components/Molecules/Forms/Audit';
import Audit from 'components/Molecules/Audit';

const WebDevelopment: NextPage = () => {
  const [data, setData] = useState(null);
  return (
    <Layout container>
      <>
        {!data && (
          <>
            <div className="px-5 d-flex justify-content-center position-relative" style={{ marginBottom: -330 }}>
              <div className="card p-5 shadow my-5 border-0" style={{ borderRadius: 12 }}>
                <FormAudit setData={setData} />
              </div>
            </div>
            <div
              style={{
                background: 'url(/assets/img/content_wave-bg2.png) no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                minHeight: 400,
              }}
            />
          </>
        )}
        {data && (
          <div className="container">
            <Audit url={data.url} device={data.device} />
          </div>
        )}
      </>
    </Layout>
  );
};

export default WebDevelopment;
