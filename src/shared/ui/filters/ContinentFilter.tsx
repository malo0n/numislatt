import { handleContinentName } from "@/shared/lib/helpers/handleContinentName";
import { toggleSection } from "@/shared/lib/helpers/toggleSection";
import { continents } from "@/shared/model/const";
import { AnimatePresence, motion } from "motion/react";
import { Checkbox } from "@/shared/ui/buttons/Checkbox";
import { useFormContext, useWatch } from "react-hook-form";
import { useGetAllItemsFilters } from "@/pages/items/hooks/useGetAllItemsFilters";
import { AllItemsFilters } from "@/pages/items/model/types";
import { useState } from "react";

import filterArrow from "@/shared/image/icons/filterArrow.svg";

export const ContinentFilter = () => {
  const { control } = useFormContext<AllItemsFilters>();
  const searchParams = useGetAllItemsFilters();
  const [isContinentOpen, setIsContinentOpen] = useState(true);
  const continent = useWatch({ name: "continent", control: control, defaultValue: searchParams.continent });
  return (
    <div className='flex flex-col gap-2'>
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
  );
};
