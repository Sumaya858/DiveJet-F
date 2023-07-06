import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

function Cart(props) {
    const { cartItems, onAdd, onRemove } = props

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);

    const itemsPrice = cartItems.reduce((a, c) => a + c.itemPrice * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <>
            <div className="emptyTop"></div>
            <h2 className="cartpage">Your Cart</h2>
            <div className="cartCard">
                <div>  {cartItems.length === 0 && <div className="emptyCart">Cart Is Empty</div>}</div>
                {cartItems.map((item) => (
                    <div className="cartCard-item" key={item._id}>

                        <div className="cartpage">
                            &nbsp; <div>{item.itemName}</div> &nbsp; {item.qty} &nbsp; x ${item.itemPrice}
                        </div>
                        <div className="cartpage">
                            <button onClick={() => onRemove(item)} className="remove">-</button>
                            &nbsp; <button onClick={() => onAdd(item)} className="add">+</button>
                        </div>
                    </div>
                ))}
            </div>
            {cartItems.length !== 0 && (
                <div className="cartCard-Ship">
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">${itemsPrice}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Tax Price</div>
                        <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">
                            ${shippingPrice}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2">
                            <strong>Total Price</strong>
                        </div>
                        <div className="col-1 text-right">
                            <strong>${totalPrice}</strong>
                        </div>
                    </div>
                    <hr />
                    <div className="row">

                        {/* <button className="checkoutBtn" onClick={() => alert('Order being processed!')}>
                            Checkout
                        </button> */}
                        <MDBBtn className="checkoutBtn" onClick={toggleShow}>Checkout</MDBBtn>
                        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                            <MDBModalDialog centered>
                                <MDBModalContent >
                                    <MDBModalHeader>
                                        <MDBModalTitle>Success! 🎉 Your order is being processed.</MDBModalTitle>
                                        <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                    </MDBModalHeader>
                                    <MDBModalFooter>
                                        <img className="popupImg" src="https://media.giphy.com/media/Ri1VEmOzeIyRXDEFpM/giphy.gif" />
                                    </MDBModalFooter>
                                </MDBModalContent>
                            </MDBModalDialog>
                        </MDBModal>
                    </div>
                </div>
            )}


        </>
    )
}

export default Cart