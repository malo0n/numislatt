import { useFormContext } from "react-hook-form";
import { AllItemsFilters } from "../model/types";
import { Button } from "@/shared/ui";
import mainCoins from "@/shared/image/mainCoins.webp";
import { useGetAllItemsFilters } from "../hooks/useGetAllItemsFilters";



export const SearchHeader = () => {
  const searchParams = useGetAllItemsFilters()
  const methods = useFormContext<AllItemsFilters>();
  const { register } = methods;
  return (
    <section
      style={{ backgroundImage: `url(${mainCoins})` }}
      className='flex w-full flex-col items-center gap-6 bg-cover p-4 lg:gap-16'
    >
      <h1 className='font-montserrat text-32 font-bold leading-[125%] lg:text-[64px]'>
        Choose rare items from the biggest collection
      </h1>
      <div className='relative w-full lg:max-w-[848px]'>
        <input {...register("search")} defaultValue={searchParams.search || undefined } type='text' />
        <Button></Button>
      </div>
    </section>
  );
};
