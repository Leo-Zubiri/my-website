import React from 'react';
import Layout from '@theme/Layout';
import ListContent from '../../components/ListContent';
import ProjectBox from '../../components/ProjectBox';

export default function Hello() {
  return (
    <Layout title="My Notes" description="My learning documentation">
      <ListContent> 
        <ProjectBox 
          img="/img/front.png"
          title="FRONTEND"
          desc="My Frontend challenges, projects, design ideas and more..."
          tools={[]}
          pageUrl="/porfolio/frontend"
        />

        <ProjectBox 
          img="/img/backend.png"
          title="BACKEND"
          desc="Authentication, ORM, endpoints, API, and more..."
          tools={[]}
          pageUrl="/porfolio/backend"
        />

        <ProjectBox 
          img="/img/fullstack.png"
          title="FULLSTACK"
          desc="All my Full Stack projects"
          tools={[]}
          pageUrl="/porfolio/fullstack"
        />

        <ProjectBox 
          img="/img/scripting.png"
          title="Scripts"
          desc="Python Scripting, Excel VBA solutions and more..."
          tools={[]}
          pageUrl="/porfolio/scripts"
        />

      </ListContent>
    </Layout>
  );
} 