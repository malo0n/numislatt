import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { Range, getTrackBackground } from "react-range";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { AllItemsFilters } from "../pages/items/model/types";
import filterArrow from "@/shared/image/icons/filterArrow.svg";
import checkedRadio from "@/shared/image/icons/checkedRadio.svg";
import emptyRadio from "@/shared/image/icons/EmptyRadio.svg";
import checkedCheckbox from "@/shared/image/icons/checkedCheckbox.svg";
import emptyCheckbox from "@/shared/image/icons/emptyCheckbox.svg";
import { Button, SliderFilter } from "@/shared/ui";

const FiltersComponent = () => {
  const [isSortOpen, setIsSortOpen] = useState(true);
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const [isContinentOpen, setIsContinentOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const methods = useForm<AllItemsFilters>();
  const navigate = useNavigate();
  const order = useWatch({ name: "ordering", control: methods.control });
  const grade = useWatch({ name: "grade", control: methods.control });
  const continent = useWatch({ name: "continent", control: methods.control });
  const country = useWatch({ name: "country", control: methods.control });
  const toggleSection = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  };

  const { register, handleSubmit, setValue, resetField } = methods;

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
          <AnimatePresence>
            {isSortOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className='flex flex-col gap-2 overflow-hidden text-16'
              >
                <div className='min-h-1'></div>
                {["default", "price", "-price"].map((value) => (
                  <label
                    key={value}
                    className='flex gap-1 hover:cursor-pointer'
                    htmlFor={value}
                    onClick={() =>
                      value === "default" ? resetField("ordering") : setValue("ordering", value as "price" | "-price")
                    }
                  >
                    <input {...register("ordering")} type='radio' id={value} value={value} className='hidden' />
                    <img
                      src={`${order === value || (value === "default" && order == undefined) ? checkedRadio : emptyRadio}`}
                      alt='radioSortButton'
                    />
                    {value === "default"
                      ? "Default"
                      : value === "price"
                        ? "From lowest to highest"
                        : "From highest to lowest"}
                  </label>
                ))}
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
          <AnimatePresence>
            {isFiltersOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className='flex flex-col gap-4 overflow-y-hidden'
              >
                <div className='min-h-2'></div>
                {/* <div className='mb-4 flex flex-col gap-2'>
                  <h4 className='text-16 text-mainBlack text-opacity-50'>Grade</h4>
                  <div className='flex flex-col gap-1'>
                    <label className='flex gap-[5px] text-16'>
                      <input {...register('grade')} type='checkbox' className="hidden" name='type' value='banknotes' />
                      <img
                        src={`${grade ? checkedCheckbox : emptyCheckbox}`}
                        alt='radioSortButton'
                      />
                      Banknotes
                    </label>
                    <label className='flex gap-[5px] text-16'>
                      <input {...register('grade')} type='checkbox' className="hidden" name='type' value='coins' />
                      <img
                        src={`${grade ? checkedCheckbox : emptyCheckbox}`}
                        alt='radioSortButton'
                      />
                      Coins
                    </label>
                  </div>
                </div> */}

                <div className='mx-2 flex flex-col gap-2'>
                  <h4 className='text-16 text-mainBlack text-opacity-50'>Price (€)</h4>
                  <SliderFilter names={["price_min", "price_max"]} minValue={0} maxValue={200} step={0.1} />
                </div>
                <div className='mx-2 flex flex-col gap-2'>
                  <h4 className='text-16 text-mainBlack text-opacity-50'>Year</h4>
                  <SliderFilter names={["year_min", "year_max"]} minValue={1800} maxValue={2023} step={1} />
                </div>

                {/* Continent Filter */}
                <div className='mb-4'>
                  <div
                    className='flex cursor-pointer gap-1'
                    onClick={() => toggleSection(setIsContinentOpen)}
                  >
                    <img
                      src={filterArrow}
                      className={`${isContinentOpen ? "" : "rotate-180"} min-w-4 self-center`}
                      alt='filterArrow'
                    />
                    <h4 className='text-16 text-mainBlack'>Continent</h4>
                  </div>
                  <AnimatePresence>
                    {isContinentOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className='overflow-hidden flex flex-col gap-2 text-16'
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
