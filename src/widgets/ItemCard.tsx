import { Button, FadeComponent } from "@/shared/ui";
import cart from "@/shared/image/icons/addToCart.svg";
import { Link } from "@tanstack/react-router";
import { ProductCardProps } from "@/shared/types/props";

export function ItemCard(props: ProductCardProps) {
  const { id, name, image, price, year, country, grade } = props
  return (
    <FadeComponent>
      <Link to={`/items/${id}`} className='relative flex min-w-[289px] max-w-[340px] flex-col rounded-xl bg-secondaryWhite'>
        <p className="text-[17px]  px-[17px] py-[2px] absolute top-4 left-6 bg-[#32b055] rounded-[5px] text-secondaryWhite leading-[125%]">{grade.code}</p>
        <img className="w-full h-[250px] object-contain" src={image?.image} alt='coin' />
        <div className='flex flex-col gap-6 px-8 pb-8 text-start'>
          <p className='text-16'>{name}</p>
          <div className='flex gap-8 '>
            <div className='flex flex-col text-12 text-secondaryBlack'>
              <p>Country</p>
              <p>Year</p>
              <p>Continent</p>
            </div>
            <div className='flex flex-col text-12 text-mainBlack'>
              <p className="max-w-[140px] text-ellipsis whitespace-nowrap overflow-hidden">{country.name}</p>
              <p>{year}</p>
              <p>{country.continent}</p>
            </div>
          </div>
          <div className='flex w-full justify-between gap-2'>
            <p className='text-24 text-mainBlack'>€{price}</p>
            <Button className="max-w-fit px-[17px] py-[7px] text-16 [&>img]:size-4" type="primary" text="add to cart" onClick={() => {}} icon={cart}></Button>
          </div>
        </div>
      </Link>
    </FadeComponent>
  );
}
