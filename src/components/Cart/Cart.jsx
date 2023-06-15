import './Cart.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCartById } from '../../services/carts'
import { getProductById } from '../../services/products';

export const Cart = () => {

  const { id } = useParams();

  const [cart, setCart] = useState();

  useEffect(() => {
    getCartById(id).then( response => setCart(response) );
  }, [id])

  const showData = async (id) => {
    const product = await getProductById(id)
    return(
      <p key={product.id} >{product.price}</p>
    )
  }


  if (!cart) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{cart.date}</h1>
      {
        cart.products.map( async product => {
          return await showData(product.productId);
        } )
      }
    </div>
  )
}