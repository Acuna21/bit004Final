import { useState, useEffect } from 'react';
import { getAllProducts } from '../../services/products'
import './Products.css';

export const Products = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {
      getAllProducts().then((response) => {
        console.log('Products: ',response);
        setProducts(response);
      })
    }, [])

    if(!products || products.length < 1){
      return <div> Loading... </div>
    }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {
          products.map(product => <li key={product.id}> {product.title} </li> )
        }
      </ul>
    </div>
  )
}