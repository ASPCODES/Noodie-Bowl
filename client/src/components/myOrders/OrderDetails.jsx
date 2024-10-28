import React from 'react'

const OrderDetails = () => {
    return (
        <section className="orderDetails">
            <main>
                <h1>Order Details:-</h1>
                <div>
                    <h1>Shipping:-</h1>
                    <p>
                        <b>Address:-</b>
                        {" Commercial Complex, Above Nirulas, Vikas Puri, Delhi"}
                    </p>
                </div>
                <div>
                    <h1>Contact:-</h1>
                    <p>
                        <b>Name:</b>
                        {" Chef Kapoor"}
                    </p>
                    <p>
                        <b>Phone:</b>
                        {98622222990}
                    </p>
                </div>

                <div>
                    <h1>Status:-</h1>
                    <p>
                        <b>Order Status:</b>
                        {" Processing"}
                    </p>

                    <p>
                        <b>Placed At:</b>
                        {" 23-02-2024"}
                    </p>
                    <p>
                        <b>Delivered At:</b>
                        {" 23-02-2024"}
                    </p>
                </div>

                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method:</b>
                        {" Online"}
                    </p>
                    <p>
                        <b>Payment Reference:</b>#{" 177HDFSS666"}
                    </p>
                    <p>
                        <b>Paid At</b>
                        {"23-02-2024"}
                    </p>
                </div>

                <div>
                    <h1>Amount:-</h1>
                    <p>
                        <b>Items Total:</b>₹{2272}
                    </p>
                    <p>
                        <b>Shipping Charges:</b>₹{200}
                    </p>
                    <p>
                        <b>Tax:</b>₹{232}
                    </p>
                    <p>
                        <b>Total Amount:</b>₹{232 + 200 + 8072}
                    </p>
                </div>

                <article>
                    <h1>Ordered Items:-</h1>
                    <div>
                        <h4>Chicken Ramen</h4>
                        <div>
                            <span>{2}</span> x <span>{499}</span>
                        </div>
                    </div>

                    <div>
                        <h4>Fish Ramen</h4>
                        <div>
                            <span>{3}</span> x <span>{199}</span>
                        </div>
                    </div>

                    <div>
                        <h4>Mushroom Ramen</h4>
                        <div>
                            <span>{5}</span> x <span>{259}</span>
                        </div>
                    </div>

                    <div>
                        <h4>Red Hot Ramen</h4>
                        <div>
                            <span>{1}</span> x <span>{339}</span>
                        </div>
                    </div>

                    <div>
                        <h4>Egg Ramen</h4>
                        <div>
                            <span>{2}</span> x <span>{399}</span>
                        </div>
                    </div>

                    <div>
                        <h4
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            Sub Total:-
                        </h4>
                        <div
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            ₹{8072}
                        </div>
                    </div>
                </article>
            </main>
        </section>
    )
}

export default OrderDetails