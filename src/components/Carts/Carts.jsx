import { useState, useEffect } from 'react';
import { getAllCarts } from "../../services/carts";
import './Carts.css';
import { useNavigate } from 'react-router-dom';

export const Carts = () => {

  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCarts().then( response => {
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
          carts.map(cart => <li key={cart.id}>
            Date: {cart.date}
            <button onClick={()=>navigate(`/carts/${cart.id}`)} >Ver mas</button>
          </li>)
        }
      </ul>
    </div>
  )
}