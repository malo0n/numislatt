import { useFormContext } from "react-hook-form";
import { AllItemsFilters } from "../model/types";
import { Button } from "@/shared/ui";
import mainCoins from "@/shared/image/mainCoins.webp";
import { useGetAllItemsFilters } from "../hooks/useGetAllItemsFilters";
import searchIcon from "@/shared/image/icons/searchIcon.svg";



export const SearchHeader = () => {
  const searchParams = useGetAllItemsFilters()
  const methods = useFormContext<AllItemsFilters>();
  const { register } = methods;
  return (
    <section
      style={{ backgroundImage: `url(${mainCoins})` }}
      className='flex w-full flex-col items-center gap-6 bg-cover p-4 lg:gap-16 h-[316px] bg-center  lg:h-[504px] justify-center'
    >
      <h1 className='font-montserrat text-32 font-bold leading-[125%] lg:text-[64px] text-center text-mainWhite '>
        Choose rare items from the&nbsp;biggest collection
      </h1>
      <div className='relative w-full lg:max-w-[848px] bg-[#fff] lg:px-4 px-2 lg:py-[10px] py-2 border-[2px] rounded-lg border-[#D7D7D7] flex '>
        <input className="w-full placeholder:text-16 placeholder:text-secondaryBlack placeholder:leading-[125%]" placeholder="Find anything you wish"  {...register("search")} defaultValue={searchParams.search || undefined } type='text' />
        <Button className="max-w-8 lg:max-w-[64px] rounded-[4px] !p-2 h-8 [&>img]:w-4" icon={searchIcon} type='primary'></Button>
      </div>
    </section>
  );
};
