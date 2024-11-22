import { Link } from "@tanstack/react-router";
import { CustomSlider } from "./CustomSlider";
import leftArrow from "@/shared/image/icons/leftArrow.svg";
import { Button, Loader } from "@/shared/ui";
import { ItemCard } from "@/widgets";
import { useProduct } from "../hooks/useProduct";
import { getRouteApi } from '@tanstack/react-router'
import { IProductCard } from "@/shared/model/types";
import { useDeviceWidth } from "@/shared/hooks/useDeviceWidth";

const route = getRouteApi('/items/$itemId')

export function Item() {
  const deviceWidth = useDeviceWidth()
  const { itemId } = route.useParams();
  const { data, isLoading, isError } = useProduct(Number(itemId));
  const { coin, recommendations } = data;
  if (isLoading || !coin || !recommendations) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  const { name, price, description, images, year, country } = coin;
  return (
    <section className='flex flex-col gap-8 lg:gap-[124px] px-4 lg:px-[108px] py-8 lg:py-[64px]'>
      <div className='flex flex-col gap-[27px]'>
        <div className='flex gap-6'>
          {deviceWidth >= 1024 && <div className='h-fit w-full rounded-2xl bg-[#fff] px-[30px] pb-5 pt-[100px]'>
            <CustomSlider>{images.map((image: { image: string; display_order: number }) => image.image)}</CustomSlider>
          </div>}
          <div className='flex w-full flex-col gap-8 items-center lg:items-start'>
            <Link className="text-16 flex gap-2 leading-[125%] self-start" to='/items'>
              <img className='w-[14px]' src={leftArrow} alt='arrow' />
              Back to shopping
            </Link>
            {
              deviceWidth < 1024 && <CustomSlider>{images.map((image: { image: string; display_order: number }) => image.image)}</CustomSlider>
            }
            <p className='text-24 lg:text-32 leading-[125%] lg:leading-[56px]'>{name}</p>
            <p className='text-24 lg:text-32 leading-[125%]'>{price}</p>
            <div className='flex lg:flex-row flex-col gap-2 lg:gap-6 w-full'>
              <Button type='primary' text='add to cart' onClick={() => {}} />
              <Button type='secondary' text='buy now' onClick={() => {}} />
            </div>
            <div className='flex justify-between lg:w-fit w-full lg:justify-start gap-[21px]'>
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
        <div className='h-fit w-full rounded-2xl bg-secondaryWhite px-8 lg:px-[64px] py-6 flex flex-col gap-[10px] lg:gap-4'>
          <p className='lg:text-40 text-24'>Description</p>
          <p className='text-16 leading-[125%] lg:leading-[32px]'>{description}</p>
        </div>
      </div>

      <div className='flex flex-col gap-[10px] lg:gap-16'>
        <p className='text-24 lg:text-32'>You may also like</p>
        <div className='flex gap-5 max-w-full overflow-x-auto'>
          {recommendations.map((item: IProductCard) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
