import React, { useState } from 'react'
import { Link } from "react-router-dom"
import ramen1 from "../../assets/Chicken Ramen.jpg"
import ramen2 from "../../assets/Fish Ramen.avif"
import ramen3 from "../../assets/Mushroom Ramen.jpg"
import ramen4 from "../../assets/Red Hot Ramen.jpg"
import ramen5 from "../../assets/Egg Ramen.avif"

const CartItem = ({ value, title, img, increment, decrement }) => {
    return (

        <div className='cartItem'>
            <div>
                <h4>{title}</h4>
                <img src={img} alt="Item" />
            </div>
            <div>
                <button onClick={decrement}>-</button>
                <input type='number' readOnly value={value} />
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
}

const Cart = () => {
    const [cartItems, setCartItems] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    });

    const increment = (item) => {
        setCartItems((prev) => ({ ...prev, [item]: prev[item] + 1 }));
    };

    const decrement = (item) => {
        setCartItems((prev) => ({ ...prev, [item]: Math.max(prev[item] - 1, 0) }));
    };

    const ramenItems = [
        { id: 1, title: "Chicken Ramen", img: ramen1 },
        { id: 2, title: "Fish Ramen", img: ramen2 },
        { id: 3, title: "Mushroom Ramen", img: ramen3 },
        { id: 4, title: "Red Hot Ramen", img: ramen4 },
        { id: 5, title: "Egg Ramen", img: ramen5 },
    ];

    return (
        <section className='cart'>
            <main>
                {ramenItems.map(item => (
                    <CartItem
                        key={item.id}
                        title={item.title}
                        img={item.img}
                        value={cartItems[item.id]}
                        increment={() => increment(item.id)}
                        decrement={() => decrement(item.id)}
                    />

                ))}

                <article>
                    <div>
                        <h4>Sub Total</h4>
                        <p>₹{2000}</p>
                    </div>
                    <div>
                        <h4>Tax</h4>
                        <p>₹{2000 * 0.18}</p>
                    </div>
                    <div>
                        <h4>Delivery Charges</h4>
                        <p>₹{200}</p>
                    </div>{" "}
                    <div>
                        <h4>Total</h4>
                        <p>₹{2000 + 2000 * 0.18 + 200}</p>
                    </div>
                    <Link to="/shipping">Checkout</Link>
                </article>
            </main>
        </section>
    )

}

export default Cart