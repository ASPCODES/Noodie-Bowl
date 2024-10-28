import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {

    const orders = [
        { id: 1, status: "Processing", quantity: 23, amount: 21312, paymentMethod: "COD" },
        { id: 2, status: "Shipped", quantity: 10, amount: 15000, paymentMethod: "Credit Card" },
        { id: 3, status: "Delivered", quantity: 5, amount: 8000, paymentMethod: "PayPal" },
        { id: 4, status: "Processing", quantity: 3, amount: 5000, paymentMethod: "COD" },
    ];
    return (
        <section className="tableClass">
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Status</th>
                            <th>Item Qty</th>
                            <th>Amount</th>
                            <th>Payment Method</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>#{order.id}</td>
                                <td>{order.status}</td>
                                <td>{order.quantity}</td>
                                <td>₹{order.amount}</td>
                                <td>{order.paymentMethod}</td>
                                <td>
                                    <Link to={`/order/${order.id}`}>
                                        <AiOutlineEye />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </section>
    )
}

export default MyOrders