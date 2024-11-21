import { Button } from "@/shared/ui";
import cart from "@/shared/image/icons/addToCart.svg";
import { IProductCard } from "@/pages/items/model/types";
import { Link } from "@tanstack/react-router";

export function ItemCard(props: IProductCard) {
  const { id, name, image, price, year, country } = props
  return (
    <Link to={'/items/' + id} className='relative flex w-full flex-col rounded-xl bg-secondaryWhite'>
      <p className="text-2xl px-6 py-1 absolute top-4 left-6 bg-[#32b055] rounded-lg text-secondaryWhite">UNC</p>
      <img className="w-full h-[250px]" src={image} alt='coin' />
      <div className='flex flex-col gap-6 px-8 pb-8 text-start'>
        <p className='text-16'>{name}</p>
        <div className='flex gap-8 '>
          <div className='flex flex-col text-12 text-secondaryBlack'>
            <p>Country</p>
            <p>Year</p>
            <p>Continent</p>
          </div>
          <div className='flex flex-col text-12 text-mainBlack'>
            <p>{country.name}</p>
            <p>{year}</p>
            <p>{country.continent}</p>
          </div>
        </div>
        <div className='flex w-full justify-between'>
          <p className='text-24 text-mainBlack'>€{price}</p>
          <Button className="max-w-fit px-[17px] py-[7px] text-16 [&>img]:size-4" type="primary" text="add to cart" onClick={() => {}} icon={cart}></Button>
        </div>
      </div>
    </Link>
  );
}
