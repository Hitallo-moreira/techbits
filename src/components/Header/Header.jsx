import React from 'react';
import './header.css';
import cart from '../../../public/cart.png';
export default function Header() {
  return (
    <header>
        <div className='header-container'>
          <div>
            <span>Plantify</span>
          </div>
            <div>
              <img src={cart} alt="minicart" />
            </div>
        </div>
    </header>
  )
}
