import React from "react";
import { Helmet } from "@vuer-ai/react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import SaladImg from "../../assets/menu/salad-bg.jpg";
import SoupImg from "../../assets/menu/soup-bg.jpg";

import PopularMenu from "../PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>

      <Cover img={menuImg} title={"our menu"}></Cover>

      {/* Main Cover */}

      <SectionTitle
        subHeading={"Don't miss"}
        heading={"Today's Offer"}
      ></SectionTitle>

      {/* offered Menu Items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* Dessert menu Items */}
      <MenuCategory
        items={desserts}
        title={"dessert"}
        img={dessertImg}
      ></MenuCategory>

      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={SaladImg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={SoupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
