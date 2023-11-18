import Link from "next/link";
import React from "react";

export default function NavBarMain() {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navMain-link relative" href="#">
            HOME
          </Link>
          <Link className="navMain-link relative" href="#">
            CATEGORIES
          </Link>
          <Link className="navMain-link relative" href="#">
            WOMEN'S
          </Link>
          <Link className="navMain-link relative" href="#">
            MEN'S
          </Link>
          <Link className="navMain-link relative" href="#">
            BAGS
          </Link>
          <Link className="navMain-link relative" href="#">
            FOOTWEAR
          </Link>
          <Link className="navMain-link relative" href="#">
            BLOG
          </Link>
          <Link className="navMain-link relative" href="#">
            HOT OFFERS
          </Link>
        </div>
      </div>
    </div>
  );
}
