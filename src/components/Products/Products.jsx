import { useContext } from 'react';
import './Products.css';
import { useNavigate } from 'react-router-dom';
import { FakeShopContext } from '../../context';

// eslint-disable-next-line react/prop-types
export const Products = () => {
  const HEADERS = ['#','Titulo', 'Precio', 'Categoría', 'Acciones'];

    const navigate = useNavigate();
    const { products } = useContext(FakeShopContext);

    const getDataTable = () => {
      return products.map( (product, index) => {
        return (<tr key={product.id}>
          <th className='numeral' scope="row">{index+1}</th>
          <td className='data-align'>{product.title}</td>
          <td className='data-align price'>$ {product.price}</td>
          <td>{product.category}</td>
          <td>
            <button className='pr-detail-btn' 
              onClick={() => navigate(`/products/${product.id}`)}
            >
              Detalles</button>
          </td>
        </tr>)
      })
    }
    
    // eslint-disable-next-line react/prop-types
    if(!products || products.length < 1){
      return <div> Loading... </div>
    }

  return (
    <div className='products-container'>
      <h1>Productos</h1>
      {/* <ul>
        {
          // eslint-disable-next-line react/prop-types
          products.map(product => <li key={product.id}> {product.title} <button onClick={() => navigate(`/products/${product.id}`)} >Ver mas</button> </li> )
        }
      </ul> */}
      <table className="table table-success table-striped">
        <thead>
          <tr>
            {
              HEADERS.map( header => <th key={header} scope='col' >{header}</th>)
            }
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {
            getDataTable()
          }
        </tbody>
      </table>
    </div>
  )
}