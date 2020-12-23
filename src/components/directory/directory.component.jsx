import React, { useState } from "react";
import sections from "./directory.data";
import './directory.scss'
import MenuItem from "../menu-item/menu-item.component";
export default function Directory() {
  let [sectionsArr, setSectionsArr] = useState(sections);
  return (
    <div className="directory-menu">
      {sectionsArr.map(({ title, imageUrl, id, size }) => (
        <MenuItem id={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size}/>
      ))}
    </div>
  );
}
