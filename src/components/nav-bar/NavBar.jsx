import { Link } from 'react-router-dom';
import './NavBar.css';
export const NavBar = () => {
  return (
    <nav>
      <Link to={'/products'}>Productos</Link>
      <Link to={'/carts'}>Carts</Link>
    </nav>
  )
}