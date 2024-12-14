import React from 'react';
import './header.css';
import cart from '../../../public/cart.png';
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();

  
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
            <div onClick={handleCartAction}>
              <img src={cart} alt="minicart" />
            </div>
        </div>
    </header>
  )
}
