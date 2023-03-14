import React from 'react'
import './style.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ProjectBox({
    img,title,desc,tools
}) {
  return (
    <div className='project-box'>
        <img src={useBaseUrl(img)} alt={`${title} image`} />
        <p className='title'> {title}</p>
        <p className='desc'>{desc}</p>
    </div>
  )
}
