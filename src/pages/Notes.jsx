import React from 'react';
import Layout from '@theme/Layout';
import ListContent from '../components/ListContent';
import { topics } from '../../docs/content.config';

export default function Notes() {
  return (
    <Layout title="My Notes" description="My learning documentation">
      <ListContent> 
        {
          topics.map(topic => <p>Topic</p>)
        }
      </ListContent>
    </Layout>
  );
}
