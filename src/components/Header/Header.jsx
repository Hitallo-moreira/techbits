import React from 'react';
import './header.css';
import cart from '../../../public/cart.png';
import { useNavigate, useLocation } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToHome = () => {
    navigate('/');
  };

  const handleCartAction = () => {
    navigate('/cart');
  };

  return (
    <header>
      <div className='header-container'>
        <div className='logo'>
          <span onClick={handleGoToHome}>Plantify</span>
        </div>
        {location.pathname !== '/' && (
          <div onClick={handleCartAction}>
            <img src={cart} alt="minicart" />
          </div>
        )}
      </div>
    </header>
  )
}
