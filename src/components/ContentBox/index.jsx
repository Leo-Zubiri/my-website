import React from 'react'
import './style.css';

import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ContentBox({topic}) {

  const {name,path,img} = topic;

  return (
    <a className='box fade-in' href={useBaseUrl(path)}>
      <img src={useBaseUrl(img)} alt={`Topic: ${name}`} />
    </a>
  )
}
