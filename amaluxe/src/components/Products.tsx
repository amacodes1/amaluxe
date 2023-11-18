import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "https://businessofprelovedfashion.com/cdn/shop/products/chanel-green-small-trendy-top-handle-bag-834553.jpg?v=1646782578",
    title: "Green Bag",
    desc: "LATEST FASHION GREEN BAG",
    rating: 4,
    price: "45",
  },
  {
    img: "https://businessofprelovedfashion.com/cdn/shop/products/chanel-green-small-trendy-top-handle-bag-834553.jpg?v=1646782578",
    title: "Green Bag",
    desc: "LATEST FASHION GREEN BAG",
    rating: 4,
    price: "45",
  },
  {
    img: "https://businessofprelovedfashion.com/cdn/shop/products/chanel-green-small-trendy-top-handle-bag-834553.jpg?v=1646782578",
    title: "Green Bag",
    desc: "LATEST FASHION GREEN BAG",
    rating: 4,
    price: "45",
  },
  {
    img: "https://businessofprelovedfashion.com/cdn/shop/products/chanel-green-small-trendy-top-handle-bag-834553.jpg?v=1646782578",
    title: "Green Bag",
    desc: "LATEST FASHION GREEN BAG",
    rating: 4,
    price: "45",
  },
  {
    img: "https://businessofprelovedfashion.com/cdn/shop/products/chanel-green-small-trendy-top-handle-bag-834553.jpg?v=1646782578",
    title: "Green Bag",
    desc: "LATEST FASHION GREEN BAG",
    rating: 4,
    price: "45",
  },
  {
    img: "https://businessofprelovedfashion.com/cdn/shop/products/chanel-green-small-trendy-top-handle-bag-834553.jpg?v=1646782578",
    title: "Green Bag",
    desc: "LATEST FASHION GREEN BAG",
    rating: 4,
    price: "45",
  },
];

export default function Products() {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
