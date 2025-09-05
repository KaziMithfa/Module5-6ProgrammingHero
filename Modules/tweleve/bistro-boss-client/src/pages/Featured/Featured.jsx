import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-10">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>

      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-36 px-36 ">
        <div>
          <img src={featuredImg} alt="" />
        </div>

        <div className="md:ml-8">
          <p>Aug 20, 2929</p>
          <p className="uppercase">Where I can get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quos accusamus error dolorem rem commodi? Obcaecati fugit eligendi
            aperiam tempora perferendis. Accusantium repudiandae deleniti in
            beatae magni, consequatur quod. Quo.
          </p>
          <button className="btn btn-outline border-0 border-b-4mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
