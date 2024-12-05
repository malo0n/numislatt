import { Link } from "@tanstack/react-router";
import { routes } from "../../lib";
import logo from "@/shared/image/icons/logoWhite.svg";

export function Footer() {
  return (
    <footer className='flex justify-between bg-mainBlack px-4 py-16 text-secondaryWhite lg:px-[112px] lg:py-8'>
      <div className='flex h-full w-full flex-col gap-8 lg:gap-[64px]'>
        <Link to={routes.items_page} className='flex items-end gap-[7px]'>
          <img className='w-[57px] border-secondaryWhite' src={logo} alt='logo' />
          <p className='font-habibi text-[42px] leading-[125%]'>Numislat</p>
        </Link>

        <div className='flex flex-wrap gap-10 text-16 leading-[125%] lg:gap-16 lg:text-24'>
          <div className='flex flex-col gap-4'>
            <p className='opacity-50'>Collections</p>
            <Link to={"/items"} className='transition-all hover:opacity-85' search={{ continent: ["NA"] }}>
              America
            </Link>
            <Link to={"/items"} className='transition-all hover:opacity-85' search={{ continent: ["EU"] }}>
              Europe
            </Link>
            <Link to={"/items"} className='transition-all hover:opacity-85' search={{ continent: ["AF"] }}>
              Africa
            </Link>
            <Link to={"/items"} className='transition-all hover:opacity-85' search={{ continent: ["AS"] }}>
              Asia
            </Link>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='opacity-50'>For customers</p>
            <Link to={"."}>Return policy</Link>
            <Link to={"."}>Delivery</Link>
            <Link to={"."}>Contacts</Link>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='opacity-50'>About us</p>
            <Link to={"."}>Offline Store</Link>
            <Link to={"."}>Certification</Link>
          </div>
        </div>

        <div className='flex w-full flex-col items-start justify-between gap-8 lg:flex-row lg:items-end'>
          <div className='flex flex-col gap-1 text-secondaryWhite'>
            <p className='text-16 leading-[125%] opacity-50'>Contact us</p>
            <Link className='text-16 leading-[125%] transition-all hover:opacity-85 lg:text-24' to={"."}>
              Numislatt.store@gmail.com
            </Link>
          </div>
          <p className='text-16 text-secondaryWhite'>©Numislatt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
