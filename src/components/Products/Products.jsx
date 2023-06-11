import { useContext } from 'react';
import './Products.css';
import { useNavigate } from 'react-router-dom';
import { FakeShopContext } from '../../context';

// eslint-disable-next-line react/prop-types
export const Products = () => {

    const navigate = useNavigate();
    const { products } = useContext(FakeShopContext);
    
    // eslint-disable-next-line react/prop-types
    if(!products || products.length < 1){
      return <div> Loading... </div>
    }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {
          // eslint-disable-next-line react/prop-types
          products.map(product => <li key={product.id}> {product.title} <button onClick={() => navigate(`/products/${product.id}`)} >Ver mas</button> </li> )
        }
      </ul>
    </div>
  )
}