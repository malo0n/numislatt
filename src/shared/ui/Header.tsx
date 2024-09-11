import logo from "@/shared/image/icons/logoBlack.svg";
import { NavLink } from "react-router-dom";
import { routes } from "../lib";
import arrow from "@/shared/image/icons/arrowDown.svg";
import cart from "@/shared/image/icons/cart.svg";
import profile from "@/shared/image/icons/profile.svg";
import flag from "@/shared/image/flagBritish.png";

export const Header = () => {
  return (
    <header className="h-[92px] w-ful flex justify-between items-center px-[112px] bg-mainWhite border-b-2 border-solid border-tetriaryBlack text-mainBlack">
      <NavLink to={routes.items_page} className="flex gap-1">
        <img className="" src={logo} alt="logo" />
        <p className="font-habibi text-2xl">Numislatt</p>
      </NavLink>

      <nav className="flex gap-[112px] items-center">
        <div className="flex gap-[62px]">
          <button className="flex gap-2 items-center text-2xl font-medium">
            Banknotes
            <img src={arrow} alt="" />
          </button>
          <button className="flex gap-2 items-center text-2xl font-medium">
            Coins
            <img src={arrow} alt="" />
          </button>
          <button className="flex gap-2 items-center text-2xl font-medium">
            About us
          </button>
        </div>
        <div className="flex gap-16 items-center">
          <div className="flex gap-8">
            <button><img src={cart} alt="cart" /></button>
            <button><img src={profile} alt="profile" /></button>
          </div>
          <button><img className="w-[42px]" src={flag} alt="flag" /></button>
        </div>
      </nav>
    </header>
  );
};
