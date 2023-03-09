import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import useBaseUrl from '@docusaurus/useBaseUrl';

import './index.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="heroBanner">
      <div className="titleContainer">
        <h1 className="slide-in-elliptic-top-fwd">{siteConfig.title}</h1>

        <img src={useBaseUrl("/img/logo2.png")} alt="My perfil photo"  
          className='scale-up-center main_perfil_photo'
        />

        <h2 className="expand"> {siteConfig.tagline} </h2>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`About Me`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
