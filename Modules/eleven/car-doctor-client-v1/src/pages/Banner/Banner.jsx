import React from "react";

import img1 from "../../assets/assets/images/banner/1.jpg";
import img2 from "../../assets/assets/images/banner/2.jpg";
import img3 from "../../assets/assets/images/banner/3.jpg";
import img4 from "../../assets/assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full top-0 left-0  bottom-0   transform bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl ">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              There are many variations of passages available but the majority
              have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover Mode </button>
              <button>Latest Projects</button>
            </div>
          </div>
        </div>

        <div className="absolute left-5 right-5  bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full top-0 left-0  bottom-0   transform bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl ">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              There are many variations of passages available but the majority
              have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover Mode </button>
              <button>Latest Projects</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5  bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full top-0 left-0  bottom-0   transform bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl ">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              There are many variations of passages available but the majority
              have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover Mode </button>
              <button>Latest Projects</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5  bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full top-0 left-0  bottom-0   transform bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl ">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              There are many variations of passages available but the majority
              have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover Mode </button>
              <button>Latest Projects</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5  bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
