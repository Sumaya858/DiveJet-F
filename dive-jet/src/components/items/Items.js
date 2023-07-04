import React, { useEffect, useState } from "react";
import axios, { all } from "axios";

function Items() {
    // return <h1>This is the item rental page</h1>

    const [items, setItems] = useState([])

    useEffect(() => {
        getAllItems()
    }, [])

    const getAllItems = async () => {
        const res = await axios.get('rent-item')
        console.log(res)
        setItems(res.data)
    }

    const allItems = items.map(item => {
        return (
            <div className="itemContainer" key={item._id}>
                <div className="itemListing">
                    <img className="itemImage" src={item.itemImage} />&nbsp;
                    <div className="name-price">
                        <h5 className="itemName">{item.itemName}</h5>&nbsp;
                        <h5 className="itemPrice">{item.itemPrice}</h5>&nbsp;
                    </div>
                    <button className="addItemBtn">Add to Cart</button>
                </div>
            </div>
        )
    })

    return (
        <div>
            {allItems}
        </div>
    )
}

export default Items