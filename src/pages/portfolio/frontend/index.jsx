import React from 'react';
import Layout from '@theme/Layout';
import ListContent from '../../../components/ListContent';
import ProjectBox from '../../../components/ProjectBox';

import { frontend } from '../../../data/portofolio-content';

export default function Hello() {
  return (
    <Layout title="Frontend Projects" description="Leo Zubiri frontend projects">
      <div className='pattern'>

        <h1 className='section-title font-mono'>Frontend Projects</h1>
        <ListContent> 

            {
                frontend.map(proj => 
                <ProjectBox 
                    img={proj.imgPath}
                    title={proj.title}
                    desc={proj.desc}
                    tools={proj.tags}
                    pageUrl={proj.pageUrl}
                    />
                )
            }
            

        </ListContent>
      </div>
    </Layout>
  );
} 
