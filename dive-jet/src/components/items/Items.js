import React, { useEffect, useState } from "react";
import Product from "./Product";
import img1 from '../items/bubble.png'

function Items(props) {
    // return <h1>This is the item rental page</h1>

    const { products, onAdd } = props;

    return (
        <div className="rentProduct">
            {/* <div className="emptyTop"></div> */}
            <br></br>
            <br></br>
            <h2 className="cartpage">Products</h2>
            <h5 className="cartpage">*NOTE: Please make sure you have a valid diving license before renting any equipment.*</h5>
            <img className="itemicon" src={img1} alt="jj" />
            <div>
                {products.map((product) => (
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </div>
    )
}

export default Items