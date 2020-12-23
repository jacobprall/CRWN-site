import React, { useState } from 'react'
import { SHOP_DATA } from '../../data/shop.data'
import CollectionPreview from '../../components/preview-collection/collection-preview.component'
export default function ShopPage(props) {
  const [shopData, setShopData] = useState(SHOP_DATA)
  return (
    <div className="shop-page">
      {
        shopData
        .map(({ id, ...otherProps}) => (
          <CollectionPreview key={id} {...otherProps} />
          )
        )
      }
    </div>
  )
}
