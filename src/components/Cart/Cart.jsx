import './Cart.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCartById } from '../../services/carts'

export const Cart = () => {

  const { id } = useParams();

  const [cart, setCart] = useState();

  useEffect(() => {
    getCartById(id).then( response => setCart(response) );
  }, [id])

  if (!cart) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{cart.date}</h1>
    </div>
  )
}