import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div className="itemContainer">
            <div className="itemListing">
                <img className="itemImage" src={product.itemImage} />&nbsp;
                <div className="name-price">
                    <h5 className="itemName">{product.itemName}</h5>&nbsp;
                    <h5 className="itemPrice">${product.itemPrice}</h5>&nbsp;
                </div>
                <button onClick={()=> onAdd(product)} className="addItemBtn">Add to Cart</button>
            </div>
        </div>
    )
}
