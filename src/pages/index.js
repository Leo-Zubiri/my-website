import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';

import './index.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="myBanner fade-in">
      <div className="titleContainer glass">
        <h1 className="slide-in-elliptic-top-fwd title-devsite">{`< ${siteConfig.title} />`}</h1>

        <img src={useBaseUrl("/img/logo2.png")} alt="My perfil photo"  
          className='scale-up-center main_perfil_photo'
        />

        <h2 className="fade_in italic-phrase"> {siteConfig.tagline} </h2>

        <Link
            className="button button--secondary button--lg  fade_in"
            to="#me">
           ABOUT ME ⏬ 
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`About Me`}
      description="Leo Zubiri Dev">
      <Head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>
          AOS.init();
        </script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>

    </Layout>
  );
}
