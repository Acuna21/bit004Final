import { useContext } from 'react';
import './Carts.css';
import { useNavigate } from 'react-router-dom';
import { FakeShopContext } from '../../context';

export const Carts = () => {
  const HEADERS = ['#','Fecha', 'Cant. Productos','Acciones']
  const navigate = useNavigate();
  const { carts } = useContext(FakeShopContext);

  const getDataTable = () => {
    return carts.map( (cart, index) => {
      return (
        <tr key={cart.id}>
          <th className='numeral' scope="row">{index+1}</th>
          <td>{new Date(cart.date).toDateString()}</td>
          <td>{cart.products.length}</td>
          <td>
            <button className='pr-detail-btn' 
              onClick={() => navigate(`/carts/${cart.id}`)}
            >
              Detalles</button>
          </td>
        </tr>
      )
    })
  }

  
  if(!carts || carts.length < 1){
    return <div> Loading... </div>
  }

  return (
    <div className='container carts-container'>
      <h1>Carts</h1>
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