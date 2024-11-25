import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { Range, getTrackBackground } from "react-range";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { AllItemsFilters } from "../model/types";
import filterArrow from "@/shared/image/icons/filterArrow.svg";
import checkedRadio from "@/shared/image/icons/checkedRadio.svg";
import emptyRadio from "@/shared/image/icons/EmptyRadio.svg";
import checkedCheckbox from "@/shared/image/icons/checkedCheckbox.svg";
import emptyCheckbox from "@/shared/image/icons/emptyCheckbox.svg";
import { Button } from "@/shared/ui";

const FiltersComponent = () => {
  const [isSortOpen, setIsSortOpen] = useState(true);
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const [isContinentOpen, setIsContinentOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([15, 102.23]);
  const [yearRange, setYearRange] = useState([1843, 2010]);
  const methods = useForm<AllItemsFilters>();
  const navigate = useNavigate();
  const order = useWatch({ name: "ordering", control: methods.control });
  const toggleSection = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  };

  const { register, handleSubmit, getValues, setValue, resetField } = methods;

  const onSubmit = (data: AllItemsFilters) => {
    console.log(data);
    navigate({
      to: ".",
      search: {
        ...data,
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        className='sticky top-[108px] mt-[108px] flex h-fit w-full max-w-[289px] select-none flex-col gap-5'
        name='filters'
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Sort By Section */}
        <div className='flex flex-col rounded-2xl bg-secondaryWhite p-4'>
          <div
            onClick={() => {
              console.log(getValues().ordering);
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
          <AnimatePresence>
            {isSortOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className='flex flex-col gap-2 overflow-hidden text-16'
              >
                <div className='min-h-1'></div>
                {['default', 'price', '-price'].map((value) => (
                  <label key={value} className='flex gap-1 hover:cursor-pointer' htmlFor={value} onClick={() => value === 'default' ? resetField('ordering') : setValue('ordering', value as 'price' | '-price')}>
                    <input {...register("ordering")} type='radio' id={value} value={value} className='hidden' />
                    <img
                      src={`${order === value || (value === 'default' && order == undefined) ? checkedRadio : emptyRadio}`}
                      alt='radioSortButton'
                    />
                    {value === 'default' ? 'Default' : value === 'price' ? 'From lowest to highest' : 'From highest to lowest'}
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Filters Section */}
        <div className='rounded-2xl bg-secondaryWhite p-4'>
          <div
            className='mb-2 flex cursor-pointer items-center justify-between'
            onClick={() => toggleSection(setIsFiltersOpen)}
          >
            <h3 className='text-lg font-bold'>Filters</h3>
            <span>{isFiltersOpen ? "▲" : "▼"}</span>
          </div>
          <AnimatePresence>
            {isFiltersOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className='overflow-hidden'
              >
                {/* Type Filter */}
                <div className='mb-4'>
                  <h4 className='mb-2 font-semibold'>Type</h4>
                  <label>
                    <input type='checkbox' name='type' value='banknotes' />
                    Banknotes
                  </label>
                  <label>
                    <input type='checkbox' name='type' value='coins' />
                    Coins
                  </label>
                </div>

                {/* Price Filter */}
                <div className='mb-4'>
                  <h4 className='mb-2 font-semibold'>Price (€)</h4>
                  <Range
                    values={priceRange}
                    step={0.1}
                    min={0}
                    max={200}
                    onChange={(values) => setPriceRange(values)}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: "6px",
                          width: "100%",
                          background: getTrackBackground({
                            values: priceRange,
                            colors: ["#ccc", "#FFD700", "#ccc"],
                            min: 0,
                            max: 200,
                          }),
                        }}
                        className='rounded-full'
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: "14px",
                          width: "14px",
                          backgroundColor: "#FFD700",
                        }}
                        className='rounded-full'
                      />
                    )}
                  />
                  <div className='mt-1 flex justify-between text-sm'>
                    <span>{priceRange[0].toFixed(2)}</span>
                    <span>{priceRange[1].toFixed(2)}</span>
                  </div>
                </div>

                {/* Year Filter */}
                <div className='mb-4'>
                  <h4 className='mb-2 font-semibold'>Year</h4>
                  <Range
                    values={yearRange}
                    step={1}
                    min={1800}
                    max={2023}
                    onChange={(values) => setYearRange(values)}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: "6px",
                          width: "100%",
                          background: getTrackBackground({
                            values: yearRange,
                            colors: ["#ccc", "#FFD700", "#ccc"],
                            min: 1800,
                            max: 2023,
                          }),
                        }}
                        className='rounded-full'
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: "14px",
                          width: "14px",
                          backgroundColor: "#FFD700",
                        }}
                        className='rounded-full'
                      />
                    )}
                  />
                  <div className='mt-1 flex justify-between text-sm'>
                    <span>{yearRange[0]}</span>
                    <span>{yearRange[1]}</span>
                  </div>
                </div>

                {/* Continent Filter */}
                <div className='mb-4'>
                  <div
                    className='flex cursor-pointer items-center justify-between'
                    onClick={() => toggleSection(setIsContinentOpen)}
                  >
                    <h4 className='font-semibold'>Continent</h4>
                    <span>{isContinentOpen ? "▲" : "▼"}</span>
                  </div>
                  <AnimatePresence>
                    {isContinentOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className='overflow-hidden pl-4'
                      >
                        <label>
                          <input type='checkbox' name='continent' value='europe' />
                          Europe
                        </label>
                        <label>
                          <input type='checkbox' name='continent' value='asia' />
                          Asia
                        </label>
                        <label>
                          <input type='checkbox' name='continent' value='north-america' />
                          North America
                        </label>
                        <label>
                          <input type='checkbox' name='continent' value='south-america' />
                          South America
                        </label>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Country Filter */}
                <div className='mb-4'>
                  <div
                    className='flex cursor-pointer items-center justify-between'
                    onClick={() => toggleSection(setIsCountryOpen)}
                  >
                    <h4 className='font-semibold'>Country</h4>
                    <span>{isCountryOpen ? "▲" : "▼"}</span>
                  </div>
                  <AnimatePresence>
                    {isCountryOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className='overflow-hidden pl-4'
                      >
                        <label>
                          <input type='checkbox' name='country' value='france' />
                          France
                        </label>
                        <label>
                          <input type='checkbox' name='country' value='italy' />
                          Italy
                        </label>
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
      </form>
    </FormProvider>
  );
};

export default FiltersComponent;
