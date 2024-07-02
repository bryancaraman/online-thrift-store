import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material'
import ShopItem from './ShopItem';
import { useRouter } from 'next/router'

function ShopItemList() {
  const getProductsUrl = "http://localhost:8000/v1/products";
  const addToCartUrl = "http://localhost:8000/v1/cartitems";
  const [products, setProducts] = useState([]);
  const router = useRouter()

  useEffect(async () => {
    const response = await fetch(getProductsUrl, { method: 'GET'});
    const json = await response.json();
    setProducts(json)
  }, [])

  const handleAddToCart = async (product) => {
    const body = JSON.stringify(product);
    const response = await fetch(addToCartUrl, { method: 'POST', body, headers: { 'content-type': 'application/json' }});
    router.push("/cart")
  }

  return (
    <Grid container direction="row" spacing={1}>
      {products.map(product =>
        <Grid item xs>
          <ShopItem 
            key={product.id}
            product_id={product.id}
            name={product.name}
            description={product.description}
            image_url={product.image_url}
            price={product.price}
            is_on_sale={product.is_on_sale}
            sale_price={product.sale_price}
            onAddToCart={handleAddToCart}
          />
        </Grid>
      )}
    </Grid>
  )
}


export default ShopItemList