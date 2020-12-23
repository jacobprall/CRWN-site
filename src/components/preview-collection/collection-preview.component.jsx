import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from './collection-item.component'
export default function CollectionPreview({ title, items }) {
  // performance concern -> filter and map will be called every render
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items
          .filter((item, i) => i < 4)
          .map(({id, ...otherProps}) => (
            <CollectionItem key={id} {...otherProps} />
          ))
        }
      </div>
    </div>
  )
}
