import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Loader from '../components/Loader';

export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout >

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh',
            fontSize: '20px',
            flexDirection: 'column',
            gap: 20
          }}>

          <Loader />

          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page">
              Loading...
            </Translate>
          </p>
        </div>
        
      </Layout>
    </>
  );
}
