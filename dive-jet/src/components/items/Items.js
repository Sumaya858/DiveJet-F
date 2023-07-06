import React, { useEffect, useState } from "react";
import Product from "./Product";

function Items(props) {
    // return <h1>This is the item rental page</h1>

    const { products, onAdd } = props;

    return (
        <div>
            <div className="emptyTop"></div>
            <h2 className="cartpage">Products</h2>
            <div>
                {products.map((product) => (
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </div>
    )
}

export default Items