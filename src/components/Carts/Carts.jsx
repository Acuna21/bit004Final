import { useState, useEffect } from 'react';
import { getAllCarts } from "../../services/carts";
import './Carts.css';

export const Carts = () => {

  const [carts, setCarts] = useState([]);

  useEffect(() => {
    getAllCarts().then( response => {
      console.log('Carts: ', response);
      setCarts(response)
    } )
  }, [])
  
  if(!carts || carts.length < 1){
    return <div> Loading... </div>
  }

  return (
    <div>
      <h1>Carts</h1>
      <ul>
        {
          carts.map(cart => <li key={cart.id}>{cart.title}</li>)
        }
      </ul>
    </div>
  )
}