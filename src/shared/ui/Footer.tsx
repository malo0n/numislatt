import { NavLink } from "react-router-dom";
import { routes } from "../lib";
import logo from "@/shared/image/icons/logoWhite.svg";
import map from "@/shared/image/map.png";

export function Footer() {
  return (
    <footer className="h-[429px] px-[108px] py-16 bg-mainBlack flex justify-between text-secondaryWhite">
      <div className="h-full flex flex-col justify-between gap-[7px]">
        <NavLink to={routes.home_page} className="flex gap-[7px] items-center">
          <img
            className="w-[57px] border-secondaryWhite"
            src={logo}
            alt="logo"
          />
          <p className="font-habibi text-2xl text-[42px]">Numislatt</p>
        </NavLink>
        <div className="flex flex-col gap-1 text-secondaryWhite">
          <p className="text-2xl opacity-50">Contact us</p>
          <NavLink className={"text-[32px]"} to={"#"}>
            Numislatt.store@gmail.com
          </NavLink>
        </div>
      </div>

      <div className="flex text-2xl gap-16">
        <div className="flex flex-col gap-6">
          <p className="opacity-50">About us</p>
          <div className="flex flex-col gap-3">
            <NavLink to={"#"}>
              Offline store
            </NavLink>
            <NavLink to={"#"}>
              Certification
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="opacity-50">Collections</p>
          <div className="flex flex-col gap-3">
            <NavLink to={"#"}>
              America
            </NavLink>
            <NavLink to={"#"}>
              Europe
            </NavLink>
            <NavLink to={"#"}>
              Africa
            </NavLink>
            <NavLink to={"#"}>
              Asia
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-[71px] w-fit items-end">
          <img className="w-[456px]" src={map} alt="map" />
          <p>©Numislatt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
