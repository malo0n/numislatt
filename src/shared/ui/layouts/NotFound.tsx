import notFoundCoin from "@/shared/image/404coin.webp";
import { Button } from "..";
import { Link } from "@tanstack/react-router";
import { routes } from "../../lib";

export const NotFound = () => {
  return (
    <div className='flex min-h-screen w-full justify-center'>
      <div className='mt-12 flex flex-col items-center gap-8 font-montserrat font-medium lg:mt-0 lg:gap-12'>
        <div className='flex items-center gap-6 text-[96px] lg:gap-11 lg:text-[256px]'>
          <p>4</p>
          <div className='h-auto w-[82px] min-w-[82px] lg:w-[192px] lg:min-w-[192px]'>
            <img src={notFoundCoin} alt='404'></img>
          </div>
          <p>4</p>
        </div>
        <p className='text-center text-[20px] leading-[125%] lg:text-[48px]'>
          Sorry, this page does not exist. <br />
          Try going back to main page
        </p>
        <Link className='w-full max-w-[328px] lg:max-w-[408px]' to={routes.items_page}>
          <Button className='py-3 text-16 lg:py-4 lg:text-24' text='Go back to main' type='primary' />
        </Link>
      </div>
    </div>
  );
};
