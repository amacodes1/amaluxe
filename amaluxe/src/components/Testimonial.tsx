import Image from "next/image";
import React from "react";

export default function Testimonial() {
  return (
    <div>
      <div className="container pt-16 pb-16 grid-cols-2">
        <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1">
              <Image
                className="rounded-full inline-block"
                src="https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=612x612&w=0&k=20&c=BOHUDUKkIMycSo9tZsB7HqNUxQgknwplyqjQEVZmKvI="
                width={80}
                height={80}
                alt="dp"
              />
              <h2 className="text-gray-500 font-black text-[20px]">Jane Doe</h2>
              <p>CEO & Founder Invision</p>
              <Image
                className="inline-block py-2 bg-white"
                src="https://image.pngaaa.com/789/3520789-middle.png"
                width={50}
                height={50}
                alt="quotes"
              />
              <p className="max-w-[200px] text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="bg-red-600 bg-[url(/images/ecommerce-bg.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-white min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              <button className="bg-blackish text-white p-2 rounded-md">
                25% DISCOUNT
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Summer Collection
              </h2>
              <p className="text-gray-500 text-[20px]">
                Starting @ $20 <b>Shop Now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
