import { Link } from "@tanstack/react-router";
import { CustomSlider } from "./ui/CustomSlider";
import leftArrow from "@/shared/image/icons/leftArrow.svg";
import { Button, Loader } from "@/shared/ui";
import { ItemCard } from "@/widgets";
import { useProduct } from "./hooks/useProduct";
import { getRouteApi } from "@tanstack/react-router";
import { ProductCardProps } from "@/shared/types/props";
import { useDeviceWidth } from "@/shared/lib/hooks/useDeviceWidth";

const route = getRouteApi("/items/$itemId");

export function Item() {
  const deviceWidth = useDeviceWidth();
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
    <section className='flex flex-col gap-8 px-4 py-8 lg:gap-[124px] lg:px-[108px] lg:py-[64px]'>
      <div className='flex flex-col gap-[27px]'>
        <div className='flex gap-6'>
          {deviceWidth >= 1024 && (
            <div className='h-fit w-full rounded-2xl bg-[#fff] px-[30px] pb-5 pt-[100px]'>
              <CustomSlider>
                {images.map((image: { image: string; display_order: number }) => image.image)}
              </CustomSlider>
            </div>
          )}
          <div className='flex w-full flex-col items-center gap-8 lg:items-start'>
            <Link className='flex gap-2 self-start text-16 leading-[125%]' to='/items'>
              <img className='w-[14px]' src={leftArrow} alt='arrow' />
              Back to shopping
            </Link>
            {deviceWidth < 1024 && (
              <CustomSlider>
                {images.map((image: { image: string; display_order: number }) => image.image)}
              </CustomSlider>
            )}
            <p className='text-24 leading-[125%] lg:text-32 lg:leading-[56px]'>{name}</p>
            <p className='text-24 leading-[125%] lg:text-32'>{price}</p>
            <div className='flex w-full flex-col gap-2 lg:flex-row lg:gap-6'>
              <Button type='primary' text='add to cart' onClick={() => {}} />
              <Button type='secondary' text='buy now' onClick={() => {}} />
            </div>
            <div className='flex w-full justify-between gap-[21px] lg:w-fit lg:justify-start'>
              <div className='flex flex-col gap-4 text-16 font-medium text-secondaryBlack'>
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
        <div className='flex h-fit w-full flex-col gap-[10px] rounded-2xl bg-secondaryWhite px-8 py-6 lg:gap-4 lg:px-[64px]'>
          <p className='text-24 lg:text-40'>Description</p>
          <p className='text-16 leading-[125%] lg:leading-[32px]'>{description}</p>
        </div>
      </div>

      <div className='flex flex-col gap-[10px] lg:gap-16'>
        <p className='text-24 lg:text-32'>You may also like</p>
        <div className='flex max-w-full gap-5 overflow-x-auto'>
          {recommendations.map((item: ProductCardProps) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
