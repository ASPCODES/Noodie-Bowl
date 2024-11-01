import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from '../layout/Loader';

ChartJS.register(Tooltip, ArcElement, Legend);

const Box = ({ title, value }) => (
    <div className="dashboard__box">
        <h3>
            {title === "income" && "₹"}
            {value}
        </h3>
        <p>{title}</p>
    </div>
);

const Dashboard = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const data = {
        labels: ["Preparing", "Shipped", "Delivered"],
        datasets: [
            {
                label: "# of orders",
                data: [7, 8, 10],
                backgroundColor: [
                    "rgba(160,120,90,0.1)",
                    "rgba(175,105,45,0.2)",
                    "rgba(120,50,15,0.3)",
                ],
                borderColor: [
                    "rgb(160,120,90)",
                    "rgb(175,105,45)",
                    "rgb(120,50,15)",
                ],
                borderWidth: 1,
            }
        ]
    }

    return (
        <section className="dashboard">
            {!loading ? (
                <main className=" dashboard__content">
                    <article className="dashboard__stats">
                        <Box title="Users" value={213} />
                        <Box title="Orders" value={40} />
                        <Box title="Income" value={45323} />
                    </article>

                    <section className="dashboard__actions">

                        <aside className="dashboard__chart">
                            <Doughnut data={data} />
                        </aside>
                    </section>
                </main>
            ) : (
                <Loader />
            )}
        </section >
    )
}

export default Dashboard