import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Noodie Bowl</h2>

                <p>Savor the Flavor of Authentic Noodles!!</p>

                <br />

                <em>We prioritize authentic feedback.</em>

                <strong>All right received @noodiebowl</strong>
            </div>

            <aside>
                <h4>Follow Us</h4>

                <a href="https://x.com/AdityaS888">
                    <FaXTwitter />
                </a>
                <a href="https://github.com/ASPCODES">
                    <FaGithub />
                </a>
            </aside>
        </footer>
    );
};

export default Footer;
