/* eslint-disable no-restricted-globals */
import React from "react";
import { useHistory } from "react-router-dom";
import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
} from "./menu-item.styles";
export default function MenuItem({ title, imageUrl, size, linkUrl }) {
  let history = useHistory();
  const handleClick = () => {
    history.push(linkUrl);
  };

  return (
    <MenuItemContainer onClick={handleClick}>
      <BackgroundImageContainer
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <ContentContainer>
        <ContentTitle>{title}</ContentTitle>

        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}
