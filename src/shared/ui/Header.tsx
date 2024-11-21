import logo from "@/shared/image/icons/logoBlack.svg";
import { Link } from "@tanstack/react-router";
import { routes } from "../lib";
import arrow from "@/shared/image/icons/arrowDown.svg";
import cart from "@/shared/image/icons/cart.svg";
import profile from "@/shared/image/icons/profile.svg";
import flag from "@/shared/image/flagBritish.png";
import { useDeviceWidth } from "../hooks/useDeviceWidth";
import burger from "@/shared/image/icons/burger.svg";

export const Header = () => {
  const deviceWidth = useDeviceWidth();

  return (
    <header className='flex h-[48px] w-full items-center justify-between border-b-2 border-solid border-tetriaryBlack bg-mainWhite px-[22px] text-mainBlack lg:h-[68px] lg:px-[112px]'>
      <Link to={routes.items_page} className='flex gap-1'>
        <img className='size-5 lg:size-8' src={logo} alt='logo' />
        <p className='font-habibi text-16 lg:text-24'>Numislat</p>
      </Link>

      {deviceWidth >= 1024 ? <nav className='flex items-center gap-[204px]'>
        <div className='hidden gap-[64px] lg:flex'>
          <button className='flex items-center gap-2 text-16 font-medium' name="banknotes">
            Banknotes
            <img src={arrow} className='w-[12px] self-center' alt='arrow' />
          </button>
          <button className='flex items-center gap-2 text-16 font-medium' name="coins">
            Coins
            <img src={arrow} className='w-[12px] self-center' alt='arrow' />
          </button>
          <button className='flex items-center gap-2 text-16 font-medium' name="about">About us</button>
        </div>
        <div className='flex gap-8'>
          <button name="cart">
            <img src={cart} className='size-6' alt='cart' />
          </button>
          <button name="profile">
            <img src={profile} className='size-6' alt='profile' />
          </button>
          <button name="i18n">
            <img className='w-10' src={flag} alt='flag' />
          </button>
        </div>
      </nav> : 
        <button className="s-6" name="mobileMenu">
          <img src={burger} alt="mobileMenu" />
        </button>
      }
    </header>
  );
};
