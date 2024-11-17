import { NavLink, useParams } from "react-router-dom";
import { CustomSlider } from "./CustomSlider";
import leftArrow from "@/shared/image/icons/leftArrow.svg";
import { Button, Loader } from "@/shared/ui";
import { ItemCard } from "@/widgets";
import { ProductCardProps } from "../model/types";
import { useProduct } from "../hooks/useProduct";

export function Item() {
  const { id } = useParams();
  const { data, isLoading, isError } = useProduct(Number(id));
  const { coin, recommendations } = data;
  if (isLoading || !coin || !recommendations) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  const { name, price, description, images, year, country } = coin;
  return (
    <section className='flex flex-col gap-[124px] px-[108px] py-[64px]'>
      <div className='flex flex-col gap-[27px]'>
        <div className='flex gap-6'>
          <div className='h-fit w-full rounded-2xl bg-[#fff] px-[30px] pb-5 pt-[100px]'>
            <CustomSlider>{images.map((image: { image: string; display_order: number }) => image.image)}</CustomSlider>
          </div>
          <div className='flex w-full flex-col gap-8'>
            <NavLink className="text-16 flex gap-2 leading-[125%]" to='#'>
              <img className='w-[14px]' src={leftArrow} alt='arrow' />
              Back to shopping
            </NavLink>
            <p className='text-32 leading-[56px]'>{name}</p>
            <p className='text-32 leading-[125%]'>{price}</p>
            <div className='flex gap-6'>
              <Button type='primary' text='add to cart' onClick={() => {}} />
              <Button type='secondary' text='buy now' onClick={() => {}} />
            </div>
            <div className='flex gap-[21px]'>
              <div className='text-16 flex flex-col gap-4 font-medium text-secondaryBlack'>
                <p>Country</p>
                <p>Continent</p>
                <p>Year</p>
              </div>
              <div className='flex flex-col gap-4 text-16 font-medium text-mainBlack'>
                <p>{country.name}</p>
                <p>{country.continent}</p>
                <p>{year}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='h-fit w-full rounded-2xl bg-secondaryWhite px-[64px] py-6 flex flex-col gap-4'>
          <p className='text-40 '>Description</p>
          <p className='text-16 leading-[32px]'>{description}</p>
        </div>
      </div>

      <div className='flex flex-col gap-16'>
        <p className='text-[48px] font-medium'>You may also like</p>
        <div className='grid w-full grid-cols-3 gap-6'>
          {recommendations.map((item: ProductCardProps) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
