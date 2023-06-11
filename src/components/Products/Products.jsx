import { useState, useEffect } from 'react';
import { getAllProducts } from '../../services/products'
import './Products.css';
import { useNavigate } from 'react-router-dom';

export const Products = () => {

    const [products, setProducts] = useState([])
    const navigate = useNavigate();

    useEffect( () => {
      getAllProducts().then((response) => {
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
          products.map(product => <li key={product.id}> {product.title} <button onClick={() => navigate(`/products/${product.id}`)} >Ver mas</button> </li> )
        }
      </ul>
    </div>
  )
}