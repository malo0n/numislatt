import { useFormContext } from "react-hook-form";
import { AllItemsFilters } from "@/shared/model";
import { Button } from "@/shared/ui";
import mainCoins from "@/shared/image/mainCoins.webp";
import { useGetAllItemsFilters } from "@/shared/lib";
import searchIcon from "@/shared/image/icons/searchIcon.svg";

export const SearchHeader = () => {
  const searchParams = useGetAllItemsFilters();
  const methods = useFormContext<AllItemsFilters>();
  const { register } = methods;
  return (
    <section
      style={{ backgroundImage: `url(${mainCoins})` }}
      className='flex h-[316px] w-full flex-col items-center justify-center gap-6 bg-cover bg-center p-4 lg:h-[504px] lg:gap-16'
    >
      <h1 className='text-center font-montserrat text-32 font-bold leading-[125%] text-mainWhite lg:text-[64px]'>
        Choose rare items from the&nbsp;biggest collection
      </h1>
      <div className='relative flex w-full rounded-lg border-[2px] border-[#D7D7D7] bg-[#fff] px-2 py-2 lg:max-w-[848px] lg:px-4 lg:py-[10px]'>
        <input
          className='w-full placeholder:text-16 placeholder:leading-[125%] placeholder:text-secondaryBlack'
          placeholder='Find anything you wish'
          {...register("search")}
          defaultValue={searchParams.search || undefined}
          type='text'
        />
        <Button
          className='h-8 max-w-8 rounded-[4px] !p-2 lg:max-w-[64px] [&>img]:w-4'
          icon={searchIcon}
          type='primary'
        ></Button>
      </div>
    </section>
  );
};
