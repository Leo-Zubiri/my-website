import React from 'react';
import Layout from '@theme/Layout';
import ListContent from '../components/ListContent';
import ContentBox from '../components/ContentBox';
import { topics } from '../../docs/content.config';

export default function Notes() {
  return (
    <Layout title="My Notes" description="My learning documentation">
       <h1 className='section-title font-mono'>My Learning documentation</h1>
      <ListContent> 
        {
          topics.map(topic => 
            <ContentBox 
              key={topic.name}
              topic={topic}
            />
          )
        }
      </ListContent>
    </Layout>
  );
}
