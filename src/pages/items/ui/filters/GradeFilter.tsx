import { toggleSection } from "@/shared/lib";
import { grades } from "@/shared/model";
import { AnimatePresence, motion } from "motion/react";
import { Checkbox } from "@/shared/ui";
import filterArrow from "@/shared/image/icons/filterArrow.svg";
import { useGetAllItemsFilters } from "@/shared/lib";
import { AllItemsFilters } from "@/shared/model";
import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

export const GradeFilter = () => {
  const [isGradeOpen, setIsGradeOpen] = useState(true);
  const methods = useFormContext<AllItemsFilters>();
  const searchParams = useGetAllItemsFilters();
  const grade = useWatch({ name: "grade", control: methods.control, defaultValue: searchParams.grade });
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex cursor-pointer gap-1' onClick={() => toggleSection(setIsGradeOpen)}>
        <img src={filterArrow} className={`${isGradeOpen ? "" : "rotate-180"} min-w-4 self-center`} alt='filterArrow' />
        <h4 className='text-16 text-mainBlack'>Grade</h4>
      </div>
      <AnimatePresence initial={false}>
        {isGradeOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className='flex flex-col gap-2 overflow-hidden text-16'
          >
            {grades.map((singleGrade) => (
              <Checkbox
                name='grade'
                key={singleGrade}
                value={singleGrade}
                isChecked={grade ? grade.includes(singleGrade) : false}
                text={singleGrade}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
