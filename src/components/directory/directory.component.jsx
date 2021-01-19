import React from "react";
import { useSelector } from "react-redux";

import { DirectoryContainer } from "./directory.styles";
import MenuItem from "../menu-item/menu-item.component";
export default function Directory() {
  const sectionsArr = useSelector((state) => state.directory);
  return (
    <DirectoryContainer>
      {sectionsArr.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem
          id={id}
          title={title.toUpperCase()}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </DirectoryContainer>
  );
}
