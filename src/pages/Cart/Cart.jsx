import React from 'react';
import './cart.css';
import trash from '../../../public/trash.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from '../../components/CartSlice';

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleRemoveItem = (itemId) => {
        dispatch(removeItemFromCart(itemId));
    };

    const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseItemQuantity(itemId));
    };

    const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseItemQuantity(itemId));
    };

    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/products');
    };

    const handleCheckout = () => {
        alert('Coming Soon');
    }

    return (
        <div className="cart-container">
            <div className="cart-wrapper">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div className="item" key={item.id}>
                            <img className="product-image" src={item.thumbnail} alt={item.name} />
                            <div className="name-container">
                                <span>{item.name}</span>
                            </div>
                            <div className="price-container">
                                <span>${item.price}</span>
                            </div>
                            <div className="item-actions">
                                <div className="qty-actions">
                                    <button className="min" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                    <div className="items-qty">{item.quantity}</div>
                                    <button className="max" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                </div>
                                <div className="delete">
                                    <button onClick={() => handleRemoveItem(item.id)}>
                                        <img src={trash} alt="delete" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}

                {cartItems.length > 0 && (
                    <div className="final-price">
                        <div className="summary">
                            <div className="total-items">
                                Items: {totalQuantity}
                            </div>
                            <div className="cart-total">
                                Total: ${totalAmount}
                            </div>
                        </div>
                        <div className="btn-actions">
                            <button className="continue" onClick={handleContinue}>Continue shopping</button>
                            <button className="checkout"  onClick={handleCheckout}>Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
