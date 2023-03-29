import React from 'react';
import Layout from '@theme/Layout';
import ListContent from '../../components/ListContent';
import ProjectBox from '../../components/ProjectBox';

export default function Hello() {
  return (
    <Layout title="My Portfolio" description="Leo Zubiri Portfolio">
      <div className='pattern'>
      <h1 className='section-title font-mono'>My Portfolio</h1>
      <ListContent> 
        <ProjectBox 
          img="/img/front.png"
          title="FRONTEND"
          desc="My Frontend challenges, projects, design ideas and more..."
          tools={[]}
          pageUrl="/portfolio/frontend"
        />

        <ProjectBox 
          img="/img/backend.png"
          title="BACKEND"
          desc="Authentication, ORM, endpoints, API, and more..."
          tools={[]}
          pageUrl="/portfolio/backend"
        />

        <ProjectBox 
          img="/img/fullstack.png"
          title="FULLSTACK"
          desc="All my Full Stack projects"
          tools={[]}
          pageUrl="/portfolio/fullstack"
        />

        <ProjectBox 
          img="/img/scripting.png"
          title="Scripts"
          desc="Python Scripting, Excel VBA solutions and more..."
          tools={[]}
          pageUrl="/portfolio/scripts"
        />

      </ListContent>
      </div>
    </Layout>
  );
} 