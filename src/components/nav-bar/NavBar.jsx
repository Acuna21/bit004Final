import { Link } from 'react-router-dom';
import shop from '../../assets/shop.png';
import './NavBar.css';
export const NavBar = () => {
  return (
    <nav>
      <div className='nav-bar'>
        <Link to={'/'} ><img src={shop} /><span className='nav-title'>Fake Shop</span></Link>
        <ul>
          <li><Link to={'/'}>Inicio</Link></li>
          <li><Link to={'/products'}>Productos</Link></li>
          <li><Link to={'/carts'}>Órdenes</Link></li>
        </ul>
      </div>
    </nav>
  )
}