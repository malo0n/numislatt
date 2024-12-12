import { useFormContext } from "react-hook-form";
import { AllItemsFilters } from "@/shared/model";
import checkedCheckbox from "@/shared/image/icons/checkedCheckbox.svg";
import emptyCheckbox from "@/shared/image/icons/emptyCheckbox.svg";
import { continentsType, countriesType, gradesType, checkboxProps } from "@/shared/model";

export const Checkbox = <T extends countriesType | continentsType | gradesType>(props: checkboxProps<T>) => {
  const { value, isChecked, text, name } = props;
  const { register } = useFormContext<AllItemsFilters>();

  return (
    <label key={value} className='flex gap-1 hover:cursor-pointer'>
      <input type='checkbox' defaultChecked={isChecked} {...register(name)} value={value} className='hidden' />
      <img src={`${isChecked ? checkedCheckbox : emptyCheckbox}`} alt='Checkbox' />
      {text}
    </label>
  );
};
