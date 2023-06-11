import { useParams } from 'react-router-dom';
import './Product.css';
import { useState, useEffect } from 'react';
import { getProductById } from '../../services/products'

export const Product = () => {

  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById(id).then( response => setProduct(response) );
  }, [id])
  
  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )
}