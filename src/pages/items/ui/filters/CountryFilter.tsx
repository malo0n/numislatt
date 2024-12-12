import filterArrow from "@/shared/image/icons/filterArrow.svg";
import { AnimatePresence, motion } from "motion/react";
import { Checkbox } from "@/shared/ui";
import { IAllCountries } from "@/shared/model";
import { useFormContext, useWatch } from "react-hook-form";
import { AllItemsFilters } from "@/shared/model";
import { useGetAllItemsFilters } from "@/shared/lib";
import { useState } from "react";
import { toggleSection } from "@/shared/lib";

export const CountryFilter = ({ countries }: { countries: IAllCountries[] }) => {
  const { control } = useFormContext<AllItemsFilters>();
  const [isCountryOpen, setIsCountryOpen] = useState(true);
  const searchParams = useGetAllItemsFilters();
  const country = useWatch({ name: "country", control: control, defaultValue: searchParams.country });

  return (
    <div className='flex flex-col gap-2'>
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
  );
};
