import { Button } from "@/shared/ui";
import cart from "@/shared/image/icons/cart.svg";
import { ProductCardProps } from "@/pages/item/model/types";
import { NavLink } from "react-router-dom";

export function ItemCard(props: ProductCardProps) {
  const { id, name, image, price, year, country } = props
  return (
    <NavLink to={'/items/' + id} className='relative flex w-full flex-col rounded-2xl bg-secondaryWhite'>
      <p className="text-2xl px-6 py-1 absolute top-4 left-6 bg-[#32b055] rounded-lg text-secondaryWhite">UNC</p>
      <img className="w-full h-[250px]" src={image} alt='coin' />
      <div className='flex flex-col gap-6 px-8 pb-8 text-start'>
        <p className='text-2xl font-medium'>{name}</p>
        <div className='flex gap-8 '>
          <div className='flex flex-col text-[16px] font-medium text-secondaryBlack'>
            <p>Country</p>
            <p>Year</p>
            <p>Continent</p>
          </div>
          <div className='flex flex-col text-[16px] font-medium'>
            <p>{country.name}</p>
            <p>{year}</p>
            <p>{country.continent}</p>
          </div>
        </div>
        <div className='flex w-full justify-between'>
          <p className='text-[24px] font-medium !rounded-lg'>€{price}</p>
          <Button className="max-w-fit font-medium" type="primary" text="add to cart" onClick={() => {}} icon={cart}></Button>
        </div>
      </div>
    </NavLink>
  );
}
