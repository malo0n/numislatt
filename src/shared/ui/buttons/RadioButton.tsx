import { AllItemsFilters } from "@/shared/model";
import { useFormContext, useWatch } from "react-hook-form";
import checkedRadio from "@/shared/image/icons/checkedRadio.svg";
import emptyRadio from "@/shared/image/icons/EmptyRadio.svg";
import { RadioButtonProps } from "@/shared/model";
import { useGetAllItemsFilters } from "@/shared/lib";

export const RadioButton = (props: RadioButtonProps) => {
  const { value, label, name } = props;
  const { register, setValue, resetField, control } = useFormContext<AllItemsFilters>();
  const searchParams = useGetAllItemsFilters();
  const order = useWatch({ name: name, control: control, defaultValue: searchParams[name] });

  return (
    <label
      key={value}
      className='flex gap-1 hover:cursor-pointer'
      htmlFor={value}
      onClick={() => (value === "default" ? resetField(name) : setValue(name, value as "price" | "-price"))}
    >
      <input
        {...register(name)}
        defaultChecked={value === order}
        type='radio'
        id={value}
        value={value}
        className='hidden'
      />
      <img
        src={`${order === value || (value === "default" && order == undefined) ? checkedRadio : emptyRadio}`}
        alt='radioSortButton'
        className='transition-all duration-200 ease-in-out'
      />
      {label}
    </label>
  );
};
