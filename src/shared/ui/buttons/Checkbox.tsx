import { useFormContext } from "react-hook-form";
import { checkboxProps } from "../../types/props";
import { AllItemsFilters } from "@/pages/items/model/types";
import checkedCheckbox from "@/shared/image/icons/checkedCheckbox.svg";
import emptyCheckbox from "@/shared/image/icons/emptyCheckbox.svg";
import { continents, countries } from "../../model";


export const Checkbox = <T extends countries | continents>(props: checkboxProps<T>) => {
  const { value, isChecked, text, name  } = props
  const {register} = useFormContext<AllItemsFilters>();

  return (
    <label key={value} className='flex gap-1 hover:cursor-pointer'>
      <input type='checkbox' defaultChecked={isChecked} {...register(name)} value={value} className='hidden' />
      <img src={`${isChecked ? checkedCheckbox : emptyCheckbox}`} alt='continentCheckbox' />
      {text}
    </label>
  );
};
