import { Link } from "@tanstack/react-router";
import { routes } from "../../lib";
import logo from "@/shared/image/icons/logoWhite.svg";

export function Footer() {
  return (
    <footer className='flex justify-between bg-mainBlack px-4 lg:px-[112px] py-16 lg:py-8 text-secondaryWhite'>
      <div className='flex h-full w-full flex-col gap-8 lg:gap-[64px]'>
        <Link to={routes.items_page} className='flex items-end gap-[7px]'>
          <img className='w-[57px] border-secondaryWhite' src={logo} alt='logo' />
          <p className='font-habibi text-[42px] leading-[125%]'>Numislat</p>
        </Link>

        <div className='flex flex-wrap gap-10 lg:gap-16 text-16 lg:text-24 leading-[125%]'>
          <div className='flex flex-col gap-4'>
            <p className='opacity-50'>Collections</p>
            <Link to={"/items"} className="hover:opacity-85 transition-all" search={{ continent: "NA"}}>America</Link>
            <Link to={"/items"} className="hover:opacity-85 transition-all" search={{ continent: "EU"}}>Europe</Link>
            <Link to={"/items"} className="hover:opacity-85 transition-all" search={{ continent: "AF"}}>Africa</Link>
            <Link to={"/items"} className="hover:opacity-85 transition-all" search={{ continent: "AS"}}>Asia</Link>
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

        <div className='flex lg:flex-row flex-col gap-8 w-full items-start lg:items-end justify-between'>
          <div className='flex flex-col gap-1 text-secondaryWhite'>
            <p className='text-16 opacity-50 leading-[125%]'>Contact us</p>
            <Link className='text-16 lg:text-24 leading-[125%] hover:opacity-85 transition-all ' to={"."}>
              Numislatt.store@gmail.com
            </Link>
          </div>
          <p className='text-16 text-secondaryWhite'>©Numislatt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
