import React from "react";
import { CollectionsOverviewContainer } from "./collections-overview.styles";
import CollectionPreview from "../preview-collection/collection-preview.component";
import { useSelector } from "react-redux";
export default function CollectionsOverview() {
  const collections = Object.values(useSelector((state) => state.collections));

  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </CollectionsOverviewContainer>
  );
}
