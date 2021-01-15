import React from "react";
import { useSelector } from 'react-redux'

import './directory.scss'
import MenuItem from "../menu-item/menu-item.component";
export default function Directory() {
  const sectionsArr = useSelector(state => state.directory)
  return (
    <div className="directory-menu">
      {sectionsArr.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem id={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
      ))}
    </div>
  );
}
