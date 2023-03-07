import React from 'react';
import Layout from '@theme/Layout';
import Loader from '../components/Loader';
import Translate, {translate} from '@docusaurus/Translate';

export default function Hello() {
  return (
    <Layout title="My Portfolio" description="Leo Zubiri Portfolio">
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

          <Loader text={"Coming soon..."}/>
        </div>
    </Layout>
  );
} 