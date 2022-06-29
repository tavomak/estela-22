import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from 'components/Templates/Layout';
import Button from 'components/Atoms/Button';
import Card from 'components/Atoms/Card';
import styles from 'styles/pages/Home.module.scss';

const Home: NextPage = () => (
  <Layout
    title="Estela estudio digital"
    description="Financiamos tu adquisición de activos fijos"
    className="container-fluid"
  >
    <>
      <section className="bg-primary-gradient">
        <div className="container ">
          <div className="row align-items-center content-wrapper">
            <div className="col-md-6">
              <div className={styles.imageWrap}>
                <div className={styles.primaryImage}>
                  <Image src="/assets/img/girlwalk.png" alt="girl" width={700} height={788} objectFit="contain" layout="responsive" />
                </div>
                <div className={styles.objOne}>
                  <Image src="/assets/img/obj-1.png" alt="girl" width={90} height={89} objectFit="contain" layout="responsive" />
                </div>
                <div className={styles.objTwo}>
                  <Image src="/assets/img/obj-2.png" alt="girl" width={80} height={82} objectFit="contain" layout="responsive" />
                </div>
                <div className={styles.objThree}>
                  <Image src="/assets/img/obj-3.png" alt="girl" width={80} height={91} objectFit="contain" layout="responsive" />
                </div>
                <div className={styles.objFour}>
                  <Image src="/assets/img/obj-4.png" alt="girl" width={90} height={109} objectFit="contain" layout="responsive" />
                </div>
                <div className={styles.objFive}>
                  <Image src="/assets/img/obj-5.png" alt="girl" width={80} height={82} objectFit="contain" layout="responsive" />
                </div>
                <div className={styles.objSix}>
                  <Image src="/assets/img/obj-6.png" alt="girl" width={160} height={89} objectFit="contain" layout="responsive" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h1 className={`display-font display-1 ${styles.primaryTitle}`}>
                <span className={styles.firstLetter}>
                  Digital
                  <br />
                </span>
                <span className={styles.secondLetter}>
                  Marketing
                  <br />
                </span>
                <span className={styles.tirdLetter}>
                  Services
                  <br />
                </span>
              </h1>
              <p>
                Logra resultados increíbles mejorando tus procesos digitales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mo-content-wrapper">
        <div className="container py-5">
          <div className="row no-content-wrapper align-items-center py-5">
            <div className="col-md-6">
              <h2 className="fs-5 m-0">WHY CHOOSE US</h2>
              <h2 className="font-bold">Boosts Your Website Traffic!</h2>
              <p>We are passionate about our work. Our designers stay ahead of the curve to provide engaging and user-friendly website designs to make your business stand out. Our developers are committed to maintaining the highest web standards so that your site will withstand the test of time. We care about your business, which is why we work with you.</p>
              <Button className="btn btn-primary btn-outline" text="Discover more" />
            </div>
            <div className="col-md-6">
              <ul className="d-flex flex-wrap">
                <li className="w-50 p-2">
                  <Card shadow bRadius="10px" noBorderLine>
                    <Image src="/assets/img/circle_orange.png" width="76" height="76" alt="circle orange" />
                    <p>Discover, Explore the Product</p>
                  </Card>
                </li>
                <li className="w-50 p-2">
                  <Card shadow bRadius="10px" noBorderLine>
                    <Image src="/assets/img/circle_green.png" width="76" height="76" alt="circle green" />
                    <p>Art Direction & Brand Strategy</p>
                  </Card>
                </li>
                <li className="w-50 p-2">
                  <Card shadow bRadius="10px" noBorderLine>
                    <Image src="/assets/img/circle_blue.png" width="76" height="76" alt="circle blue" />
                    <p>Product UX, Design & Development</p>
                  </Card>
                </li>
                <li className="w-50 p-2">
                  <Card shadow bRadius="10px" noBorderLine>
                    <Image src="/assets/img/circle_purple.png" width="76" height="76" alt="circle purple" />
                    <p>
                      Marketing Strategy & SEO Campaigns
                    </p>
                  </Card>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="no-content-wrapper">
        <div className="container ">
          <div className="row align-items-center no-content-wrapper">
            <div className="col-md-6">
              <h2 className="fs-5 m-0">WHY CHOOSE US</h2>
              <h2 className="font-bold">Boosts Your Website Traffic!</h2>
              <p>Diseñamos y desarrollamos servicios que faciliten a personas mostrarse, comunicarse y crecer haciendo uso de la tecnología y los medios digitales. Creemos que las personas felices aseguran negocios saludables, un proyecto exitoso comienza y termina con confianza y una estrecha colaboración.</p>
              <Button className="btn btn-primary btn-outline" text="Discover more" />
            </div>

            <div className="col-md-6">
              <div className={styles.imageWrap}>
                <Image src="/assets/img/chating.png" alt="girl" width={700} height={788} objectFit="contain" layout="responsive" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  </Layout>
);

export default Home;
