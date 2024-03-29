import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import useBaseUrl from '@docusaurus/useBaseUrl';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
            className="button button--lg fade_in glass text-color font-mono"
            to="#me">
           ABOUT ME ⏩
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Layout
      title={`About Me`}
      description="Leo Zubiri Dev">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>

    </Layout>
  );
}
