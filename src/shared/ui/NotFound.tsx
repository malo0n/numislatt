

import notFoundCoin from "@/shared/image/404coin.webp"
import { Button } from "."
import { Link } from "@tanstack/react-router"
import { routes } from "../lib"


export const NotFound = () => {
  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="flex flex-col gap-8 lg:gap-12 items-center font-montserrat font-medium mt-12 lg:mt-0">
        <div className="flex gap-6 lg:gap-11 text-[96px] lg:text-[256px]  items-center">
          <p>4</p>
          <div className="min-w-[82px] lg:min-w-[192px] w-[82px] lg:w-[192px] h-auto">
            <img src={notFoundCoin} alt="404"></img>
          </div>
          <p>4</p>
        </div>
        <p className="text-[20px] lg:text-[48px] text-center leading-[125%]">Sorry, this page does not exist. <br/>
        Try going back to main page</p>
        <Link className="lg:max-w-[408px] max-w-[328px] w-full"  to={routes.items_page}><Button className="text-16 py-3 lg:py-4 lg:text-24" text="Go back to main" type="primary"/></Link>
      </div>
    </div>
  )
}