import { filterCounter } from "@/shared/lib/helpers/filterCounter";
import { toggleSection } from "@/shared/lib/helpers/toggleSection";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "../buttons/Button";
import { ContinentFilter } from "./ContinentFilter";
import { CountryFilter } from "./CountryFilter";
import { SliderFilter } from "./SliderFilter";
import { IAllCountries } from "@/shared/types/types";
import { useGetAllItemsFilters } from "@/pages/items/hooks/useGetAllItemsFilters";
import { useState } from "react";
import filterArrow from "@/shared/image/icons/filterArrow.svg";
import { GradeFilter } from "@/shared/ui/filters/GradeFilter";

export const Filters = (props: { countries: IAllCountries[] }) => {
  const { countries } = props;
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const searchParams = useGetAllItemsFilters();
  return (
    <div className='rounded-2xl bg-secondaryWhite'>
      <div
        onClick={() => {
          toggleSection(setIsFiltersOpen);
        }}
        className='flex w-full justify-between p-4 hover:cursor-pointer'
      >
        <div className='flex items-start gap-[10px]'>
          <img
            src={filterArrow}
            className={`${isFiltersOpen ? "" : "rotate-180"} min-w-4 self-center`}
            alt='filterArrow'
          />
          <h3 className='text-24'>Filters</h3>
        </div>
        <p className='text-24 text-secondaryBlack'>{filterCounter(searchParams)}</p>
      </div>

      <AnimatePresence initial={false}>
        {isFiltersOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className='relative overflow-y-auto'
          >
            <div className='relative flex max-h-[350px] flex-col gap-4 overflow-y-auto px-4 pb-4'>
              <GradeFilter />
              <div className='relative flex flex-col gap-2'>
                <h4 className='text-16 text-mainBlack text-opacity-50'>Price (€)</h4>
                <SliderFilter names={["price_min", "price_max"]} minValue={0} maxValue={200} step={0.1} />
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='text-16 text-mainBlack text-opacity-50'>Year</h4>
                <SliderFilter names={["year_min", "year_max"]} minValue={1800} maxValue={2023} step={1} />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-16 text-mainBlack text-opacity-50'>Location</p>
                <div className='flex flex-col gap-4'>
                  <ContinentFilter />
                  <CountryFilter countries={countries} />
                </div>
              </div>
            </div>
            <div className='relative px-4 py-3'>
              <span className='absolute left-0 top-0 block min-h-[1px] w-full bg-tetriaryBlack' />
              <Button className='max-w-full py-[10px]' type='primary' text='Apply changes' />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
