import React from 'react';
import Layout from '@theme/Layout';
import ListContent from '../components/ListContent';
import ProjectBox from '../components/ProjectBox';

export default function Hello() {
  return (
    <Layout title="My Notes" description="My learning documentation">
      <ListContent> 
        <ProjectBox 
          img="/img/front.png"
          title="FRONTEND"
          desc="My Frontend challenges, projects and more"
          tools={[]}
        />

        <ProjectBox 
          img="/img/backend.png"
          title="BACKEND"
          desc=""
          tools={[]}
        />

        <ProjectBox 
          img="/img/fullstack.png"
          title="FULL STACK"
          desc=""
          tools={[]}
        />

      </ListContent>
    </Layout>
  );
} 