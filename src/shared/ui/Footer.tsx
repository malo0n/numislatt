import { Link } from "@tanstack/react-router";
import { routes } from "../lib";
import logo from "@/shared/image/icons/logoWhite.svg";

export function Footer() {
  return (
    <footer className="h-[429px] px-[108px] py-16 bg-mainBlack flex justify-between text-secondaryWhite">
      <div className="h-full flex flex-col justify-between gap-[7px]">
        <Link to={routes.items_page} className="flex gap-[7px] items-center">
          <img
            className="w-[57px] border-secondaryWhite"
            src={logo}
            alt="logo"
          />
          <p className="font-habibi text-2xl text-[42px]">Numislatt</p>
        </Link>
        <div className="flex flex-col gap-1 text-secondaryWhite">
          <p className="text-2xl opacity-50">Contact us</p>
          <Link className={"text-[32px]"} to={"#"}>
            Numislatt.store@gmail.com
          </Link>
        </div>
      </div>

      <div className="flex text-2xl gap-16">
        <div className="flex flex-col gap-6">
          <p className="opacity-50">About us</p>
          <div className="flex flex-col gap-3">
            <Link to={"#"}>
              Offline store
            </Link>
            <Link to={"#"}>
              Certification
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="opacity-50">Collections</p>
          <div className="flex flex-col gap-3">
            <Link to={"#"}>
              America
            </Link>
            <Link to={"#"}>
              Europe
            </Link>
            <Link to={"#"}>
              Africa
            </Link>
            <Link to={"#"}>
              Asia
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-[71px] w-fit items-end">
          <p>©Numislatt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
