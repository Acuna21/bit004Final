import './Home.css';
import caja from '../../assets/caja.png';
import cart from '../../assets/carts.png';

export const Home = () => {

  const mostBounght = [
    {
      img: cart,
      name: "The product most bounght"
    },
    {
      img: cart,
      name: "The product most bounght"
    },
    {
      img: cart,
      name: "The product most bounght"
    }
  ]

  return (
    <main className='home'>
      <div className='content products' >
        <div className='quantity-data'>
          <div className='counters' >
            <p>Número total de productos</p>
            <div><span>1234</span></div>
          </div>
          <div className='counters' >
            <p>Precio Promedio de productos</p>
            <div><span>1234</span></div>
          </div>
          <div className='counters' >
            <p>Ingresos totales generados</p>
            <div><span>1234</span></div>
          </div>
        </div>
        <img src={caja}/>
      </div>
      <div className='content carts' >
        <img src={cart} alt="" />
        <div className='most-bought'>
          {mostBounght.map( bounght => (
          <div key={bounght.name} className='most-bought-item'>
            <p>{bounght.name}</p>
            <img src={bounght.img} alt="" />
          </div>
          ))}
        </div>
        <div className='counters'>
          <p>Cantidad </p>
          <div><span>1234</span></div>
        </div>
      </div>
    </main>
  )
}