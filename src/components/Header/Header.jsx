import React from 'react';
import './header.css';
import cart from '../../../public/cart.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToHome = () => {
    navigate('/');
  };

  const handleCartAction = () => {
    navigate('/cart');
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <div className='header-container'>
        <div className='logo'>
          <span onClick={handleGoToHome}>Plantify</span>
        </div>
        {location.pathname !== '/' && (
          <div className='info' onClick={handleCartAction}>
            <img src={cart} alt="minicart" />
            {totalQuantity > 0 && <div className='items-total'>{totalQuantity}</div>}
          </div>
        )}
      </div>
    </header>
  )
}
