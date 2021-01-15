/* eslint-disable no-restricted-globals */
import React from 'react'
import { useHistory } from 'react-router-dom';
import './menu-item.scss'
export default function MenuItem({ title, imageUrl, size, linkUrl}) {
  let history = useHistory();
  const handleClick = () => { 
    history.push(linkUrl)
  }
  
  return (
    <div className={`menu-item ${size}`} onClick={handleClick}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>

        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
