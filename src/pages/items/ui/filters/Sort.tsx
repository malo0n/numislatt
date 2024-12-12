import { toggleSection } from "@/shared/lib";
import { sortOptions } from "@/shared/model";
import { AnimatePresence, motion } from "motion/react";
import { RadioButton } from "@/shared/ui";
import filterArrow from "@/shared/image/icons/filterArrow.svg";
import { useState } from "react";

export const Sort = () => {
  const [isSortOpen, setIsSortOpen] = useState(true);
  return (
    <div className='flex flex-col rounded-2xl bg-secondaryWhite p-4'>
      <div
        onClick={() => {
          toggleSection(setIsSortOpen);
        }}
        className='flex items-start gap-[10px] hover:cursor-pointer'
      >
        <img src={filterArrow} className={`${isSortOpen ? "" : "rotate-180"} min-w-4 self-center`} alt='filterArrow' />
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
            {(Object.keys(sortOptions) as (keyof typeof sortOptions)[]).map((key) => {
              return <RadioButton label={sortOptions[key]} value={key} name='ordering' key={key} />;
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
