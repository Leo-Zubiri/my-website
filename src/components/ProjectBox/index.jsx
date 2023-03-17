import React from 'react'
import './style.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ProjectBox({
    img,title,desc,tools,pageUrl
}) {

  const url = useBaseUrl(pageUrl);

  const redirect = () => { 
    window.location.href = url;
    console.log('redirect')
  }

  return (
    <div className='project-box fade-in glass' 
      onClick={redirect} 
    >
        <img src={useBaseUrl(img)} alt={`${title} image`}/>
        <p className='title'> {title}</p>
        <p className='desc'>{desc}</p>
    </div>
  )
}
