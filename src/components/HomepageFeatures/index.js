import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Education',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I studied Computer Systems Engineering at the "Universidad Autónoma de Tamaulipas". A great experience in the way of my professional preparation, friends, colleagues and teachers, good people who inspire me.
      </>
    ),
  },
  {
    title: 'My Skill Set',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Nowadays all my main skills are into the full stack web development, 
        React, NodeJS, SQL and more. Regardless of this, I always enjoy being in different development environments, 
        today I could be using python 🐍 and tomorrow my first programming language, Java☕  
      </>
    ),
  },
  {
    title: 'About my website',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I made this site as a way to collect all I enjoy as a Developer. 
        I chose Docusaurus (static site generator) to use React, and store all my markdown notes
        as documentation. All small things that I have worked and learned are still building results like this!
        ⚛️
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.monofont}>{title}</h3>
        <p className={styles.monofont}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>

    <div id='me' className='me-container'>
      <h3 className='font-mono me-title'>🚀 Hi I'm Zub! 🚀</h3>
      <div className='me-presentation'>
        <img src={useBaseUrl("/img/me.jpg")} alt="My perfil photo"  
            className='scale-up-center main_perfil_photo circle-image'
        />
        <div className="text--center padding-horiz--md">
          <h3 className={styles.monofont}>SOFTWARE DEVELOPER</h3>
          <p className='font-mono me-desc'> My name is Leo Zubiri, I'm looking to grow alongside my colleagues, to face challenges, learn a lot and get the best version of myself.</p>
        </div>
      </div>
    </div>

  <div id="education" className=''>
      <div className='education__fians'>
        <img 
          src={useBaseUrl("/img/fians.jpg")} 
          alt="Mi Facultad de Ingeniería"  
          className='fians'
          data-aos="fade-right"
          />
      </div>

      <div className='education__desc' data-aos="zoom-in">
       <img 
          src={useBaseUrl("/img/graduated.gif")} 
          alt="Education logo"  
          className='education__logo'
          />
        <h3 className="font-mono">EDUCATION</h3>
        <p className="font-mono"> {FeatureList[0].description}</p>
        
      </div>
  </div>

  <div className='skills'>
    <div className='skills__desc' data-aos="fade-right">
    	  <img 
          src={useBaseUrl("/img/langs.gif")} 
          alt="Education logo"  
          className=''
          />
        <h3 className="font-mono">MY SKILL SET</h3>
        <p className="font-mono"> {FeatureList[1].description}</p>
    </div>

    <div className='skills__img' data-aos="zoom-in">
      <img 
        src={useBaseUrl("/img/lap2.jpg")} 
        alt="Laptop in skills section" 
      />
    </div>
  </div>


    </>
  );
}
