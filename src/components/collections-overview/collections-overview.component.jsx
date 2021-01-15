import React from 'react'
import './collections-overview.styles.scss'
import CollectionPreview from '../preview-collection/collection-preview.component'
import { useSelector } from 'react-redux'
export default function CollectionsOverview() {
  const collections = Object.values(useSelector((state) => state.collections));
  
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}
