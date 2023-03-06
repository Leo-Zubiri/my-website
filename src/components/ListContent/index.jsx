import React from 'react'
import './style.css';

export default function ListContent({children}) {
  return (
    <div className="list-container">
        {children}
    </div>
  )
}
