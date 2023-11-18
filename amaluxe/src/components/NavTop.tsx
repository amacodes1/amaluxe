import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function NavTop() {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="navTop-icon-wrapper">
              <FaFacebook />
            </div>
            <div className="navTop-icon-wrapper">
              <FaTwitter />
            </div>
            <div className="navTop-icon-wrapper">
              <FaInstagram />
            </div>
            <div className="navTop-icon-wrapper">
              <FaLinkedin />
            </div>
          </div>

          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="USD">USD $</option>
              <option value="EUR">EUR</option>
              <option value="NGN">NGN</option>
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English">ENGLISH</option>
              <option value="French">FRENCH</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
