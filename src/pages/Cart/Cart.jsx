import React from 'react'
import './cart.css';
import trash from '../../../public/trash.png'
import { useNavigate } from 'react-router-dom';
export default function Cart() {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/products');
    };

    return (
        <div className='cart-container'>
            <div className="cart-wrapper">
                <div className="item">
                    <img className="product-image" src="https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />
                    <div className='name-container'>
                        <span>Nome</span>
                    </div>
                    <div className='price-container'>
                        <span>$ 5.00</span>
                    </div>
                    <div className="item-actions">
                        <div className='qty-actions'>
                            <button className='min'>-</button>
                            <div className='items-qty'>1</div>
                            <button className='max'>+</button>
                        </div>
                        <div className="delete">
                            <button>
                                <img src={trash} alt="delete" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="final-price">
                    <div className="cart-total">
                        Total: $0.00
                    </div>
                    <div className="btn-actions">
                        <button className='continue' onClick={handleContinue}>Continue shopping</button>
                        <button className='checkout'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
