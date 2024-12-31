import React from "react";
import { FaGoogle } from "react-icons/fa6";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

import qZone1 from "../../../assets/swimming.png";
import qZone3 from "../../../assets/playground.png";
import qZone2 from "../../../assets/class.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Login With Google
        </button>

        <button className="btn btn-outline w-full">
          <FaGithub />
          Login With Github
        </button>
      </div>

      <div className="p-4  mb-6">
        <h2 className="text-3xl mb-4">Find Us On</h2>
        <a
          className="flex p-4 text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>

        <a className="flex p-4 text-lg items-center border-x " href="">
          <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </a>

        <a
          className="flex p-4 text-lg items-center border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-2"></FaInstagram>
          Instagram
        </a>
      </div>

      {/* q zone */}

      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
