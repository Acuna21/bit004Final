import { useContext } from 'react';
import './Carts.css';
import { useNavigate } from 'react-router-dom';
import { FakeShopContext } from '../../context';

export const Carts = () => {

  const navigate = useNavigate();
  const { carts } = useContext(FakeShopContext);

  
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