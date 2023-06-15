import './Home.css';
import caja from '../../assets/caja.png';
import cart from '../../assets/carts.png';
import { FakeShopContext } from '../../context';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  
  const { products:allProducts, carts:allCarts } = useContext(FakeShopContext);
  const [generalInfo, setGeneralInfo] = useState({});

  useEffect(() => {
    let totalPrice = 0;
    const totalProducts = allProducts.length;
    const totalCarts = allCarts.length;
    allProducts.forEach(product => {
      totalPrice += product.price
    });
    const totalIncome = getTotalIncome(allCarts);
    const mostBounght = getMostBounght(allProducts,allCarts);
    setGeneralInfo({
      totalProducts,
      totalCarts,
      averagePrice: totalPrice / totalProducts,
      totalIncome,
      mostBounght
    })
  }, [allCarts, allProducts])

  const getTotalIncome = (carts) => {
    let total = 0;
    carts.forEach( cart => {
      cart.products.forEach( prod => {
        const product = getProductById(prod.productId);
        if(product){
          total += product.price * prod.quantity;
        }
      })
    })
    return total;
  }

  const getProductById = (id) => {
    return allProducts.find( product => product.id === id);
  }

  const getMostBounght = (products,carts) => {
    let counter = [];
    let mostBounght = []
    carts.forEach( cart => {
      cart.products.forEach( prod => {
        const countFound = counter.find( count => count.productId === prod.productId );
        if(countFound){
          countFound.quantity += prod.quantity;
        }else{
          counter.push( prod )
        }
      })
    })
    counter = counter.sort((a, b) => b.quantity - a.quantity).slice(0,3)
    counter.forEach( count => {
      const found = products.find( product => product.id === count.productId);
      if (found) {
        mostBounght.push(found);
      }
    })
    return mostBounght;
  }

  return (
    <main className='home'>
      <div className='content products' >
        <div className='quantity-data'>
          <div className='counters' >
            <p>Número total de productos</p>
            <div><span>{generalInfo.totalProducts ? generalInfo.totalProducts : 'Loading...'}</span></div>
          </div>
          <div className='counters' >
            <p>Precio Promedio de productos</p>
            <div><span>{generalInfo.averagePrice ? '$ '+generalInfo.averagePrice.toFixed(2) : 'Loading...'}</span></div>
          </div>
          <div className='counters' >
            <p>Ingresos totales generados</p>
            <div><span>{generalInfo.totalIncome ? '$ '+generalInfo.totalIncome.toFixed(2) : 'Loading...'}</span></div>
          </div>
        </div>
        <img src={caja}/>
      </div>
      <div className='content carts' >
        <img src={cart} alt="" />
        <div className='most-bought-content'>
          <p>Mas vendidos</p>
          <div className='most-bought'>
            {generalInfo.mostBounght ?  generalInfo.mostBounght.map( bounght => (
            <Link to={'/'} key={bounght.id}>
              <div  className='most-bought-item' title={bounght.title}>
                <p>{bounght.title}</p>
                <img src={bounght.image} alt="" />
              </div>
            </Link>
            )): 'Loading...'}
          </div>
        </div>
        <div className='counters'>
          <p>Cantidad total de ordenes </p>
          <div><span>{generalInfo.totalCarts ? generalInfo.totalCarts : 'Loading...'}</span></div>
        </div>
      </div>
    </main>
  )
}