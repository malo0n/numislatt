import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormContext, useWatch } from "react-hook-form";
import { AllItemsFilters } from "../pages/items/model/types";
import filterArrow from "@/shared/image/icons/filterArrow.svg";
import { Button, SliderFilter } from "@/shared/ui";
import { continents, sortOptions } from "@/shared/model/const";
import { handleContinentName } from "@/shared/helpers/handleContinentName";
import { Checkbox } from "@/shared/ui/buttons/Checkbox";
import { FilterComponentProps } from "@/shared/types/props";
import { toggleSection } from "@/shared/helpers/toggleSection";
import { RadioButton } from "@/shared/ui/buttons/RadioButton";
import { useGetAllItemsFilters } from "@/pages/items/hooks/useGetAllItemsFilters";

const FiltersComponent = (props: FilterComponentProps) => {
  const { countries } = props;
  const [isSortOpen, setIsSortOpen] = useState(true);
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const [isContinentOpen, setIsContinentOpen] = useState(true);
  const [isCountryOpen, setIsCountryOpen] = useState(true);
  const methods = useFormContext<AllItemsFilters>();
  const searchParams = useGetAllItemsFilters();
  const continent = useWatch({ name: "continent", control: methods.control, defaultValue: searchParams.continent });
  const country = useWatch({ name: "country", control: methods.control, defaultValue: searchParams.country });  
  return (
    <div className='sticky top-[108px] mt-[108px] flex h-fit w-full max-w-[289px] select-none flex-col gap-5'>
      <div className='flex flex-col rounded-2xl bg-secondaryWhite p-4'>
        <div
          onClick={() => {
            toggleSection(setIsSortOpen);
          }}
          className='flex items-start gap-[10px] hover:cursor-pointer'
        >
          <img
            src={filterArrow}
            className={`${isSortOpen ? "" : "rotate-180"} min-w-4 self-center`}
            alt='filterArrow'
          />
          <h3 className='text-24'>Sort by</h3>
        </div>
        <AnimatePresence initial={false}>
          {isSortOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className='flex flex-col gap-2 overflow-hidden text-16'
            >
              <div className='min-h-1'></div>
              {
                (Object.keys(sortOptions) as (keyof typeof sortOptions)[]).map((key)=> {
                  return <RadioButton label={sortOptions[key]} value={key} name="ordering" key={key}  />
                })
              }
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className='rounded-2xl bg-secondaryWhite p-4'>
        <div
          onClick={() => {
            toggleSection(setIsFiltersOpen);
          }}
          className='flex items-start gap-[10px] hover:cursor-pointer'
        >
          <img
            src={filterArrow}
            className={`${isFiltersOpen ? "" : "rotate-180"} min-w-4 self-center`}
            alt='filterArrow'
          />
          <h3 className='text-24'>Filters</h3>
        </div>
        <AnimatePresence initial={false}>
          {isFiltersOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className='flex max-h-[350px] flex-col gap-4 overflow-y-auto'
            >
              <div className='min-h-2'></div>

              
              <div className='mx-2 flex flex-col gap-2'>
                <h4 className='text-16 text-mainBlack text-opacity-50'>Price (€)</h4>
                <SliderFilter names={["price_min", "price_max"]} minValue={0} maxValue={200} step={0.1} />
              </div>
              <div className='mx-2 flex flex-col gap-2'>
                <h4 className='text-16 text-mainBlack text-opacity-50'>Year</h4>
                <SliderFilter names={["year_min", "year_max"]} minValue={1800} maxValue={2023} step={1} />
              </div>

              <p className='text-16 text-mainBlack text-opacity-50'>Location</p>

              <div className='mb-4 flex flex-col gap-2'>
                <div className='flex cursor-pointer gap-1' onClick={() => toggleSection(setIsContinentOpen)}>
                  <img
                    src={filterArrow}
                    className={`${isContinentOpen ? "" : "rotate-180"} min-w-4 self-center`}
                    alt='filterArrow'
                  />
                  <h4 className='text-16 text-mainBlack'>Continent</h4>
                </div>
                <AnimatePresence initial={false}>
                  {isContinentOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className='flex flex-col gap-2 overflow-hidden text-16'
                    >
                      {continents.map((continentName) => (
                        <Checkbox
                          name='continent'
                          key={continentName}
                          value={continentName}
                          isChecked={continent ? continent.includes(continentName) : false}
                          text={handleContinentName(continentName)}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className='mb-4 flex flex-col gap-2'>
                <div className='flex cursor-pointer gap-1' onClick={() => toggleSection(setIsCountryOpen)}>
                  <img
                    src={filterArrow}
                    className={`${isCountryOpen ? "" : "rotate-180"} min-w-4 self-center`}
                    alt='filterArrow'
                  />
                  <h4 className='text-16 text-mainBlack'>Country</h4>
                </div>
                <AnimatePresence initial={false}>
                  {isCountryOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className='flex flex-col gap-2 overflow-hidden text-16'
                    >
                      {countries.map((singleCountry) => (
                        <Checkbox
                          name='country'
                          key={singleCountry.iso}
                          value={singleCountry.iso}
                          isChecked={country ? country.includes(singleCountry.iso) : false}
                          text={singleCountry.name}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Button
        className='bg-yellow-400 text-black mt-4 w-full rounded-lg py-2 font-bold'
        type='primary'
        text='Apply changes'
      />
    </div>
  );
};

export default FiltersComponent;
