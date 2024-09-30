import React from "react";
import MenuCard from "./MenuCard";
import ramen1 from "../../assets/Chicken Ramen.avif"
import ramen2 from "../../assets/Vegan Ramen.avif"
import ramen3 from "../../assets/Mushroom Ramen.avif"
import ramen4 from "../../assets/Red Hot Ramen.avif"
import ramen5 from "../../assets/Egg Ramen.avif"

const Menu = () => {

    const addToCartHandler = (itemNum) => { };

    return (
        <section id="menu">
            <h1>MENU</h1>

            <div>
                <MenuCard
                    ItemNum={1}
                    noodleSrc={ramen1}
                    price={12.99}
                    title="Chicken Ramen"
                    handler={addToCartHandler}
                    delay={0.4}
                />

                <MenuCard
                    ItemNum={2}
                    noodleSrc={ramen2}
                    price={9.99}
                    title="Vegan Ramen"
                    handler={addToCartHandler}
                    delay={0.5}
                />

                <MenuCard
                    ItemNum={3}
                    noodleSrc={ramen3}
                    price={11.99}
                    title="Mushroom Ramen"
                    handler={addToCartHandler}
                    delay={0.6}
                />

                <MenuCard
                    ItemNum={4}
                    noodleSrc={ramen4}
                    price={15.99}
                    title="Red Hot Ramen"
                    handler={addToCartHandler}
                    delay={0.7}
                />

                <MenuCard
                    ItemNum={5}
                    noodleSrc={ramen5}
                    price={8.99}
                    title="Egg Ramen"
                    handler={addToCartHandler}
                    delay={0.8}
                />
            </div>
        </section>
    );
};

export default Menu;
