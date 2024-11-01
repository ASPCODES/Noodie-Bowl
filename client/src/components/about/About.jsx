import React from 'react'
import { Link } from "react-router-dom"
import { RiFindReplaceLine } from "react-icons/ri";
import owner from "../../assets/chef.avif";

const About = () => {
    return (
        <section className="about">
            <main>
                <h1>About Us</h1>

                <article>
                    <h4>Noodie Bowl</h4>
                    <p>We are here to Transform Noodles into Culinary Magic.</p>
                    <p>
                        Explore the various type of Ramen Noodles. Click below to see the
                        menu
                    </p>

                    <Link to="/">
                        <RiFindReplaceLine />
                    </Link>
                </article>

                <div>
                    <h2>Chef</h2>
                    <article>
                        <div>
                            <img src={owner} alt="Chef" />
                            <h3>Chef Kapoor</h3>
                        </div>
                        <p>
                            Hello, I'm Mr. Kapoor, The Founder and Chef at Noodie Bowl.
                            <br />
                            We are here to Transform Noodles into Culinary Magic.
                        </p>
                    </article>
                </div>
            </main>
        </section>
    )
}

export default About