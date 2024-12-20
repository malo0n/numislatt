import { useGetAllItemsFilters } from "@/shared/lib";
import { AllItemsFilters } from "@/shared/model";
import { SliderFilterProps } from "@/shared/model";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Range, getTrackBackground } from "react-range";

export const SliderFilter = (props: SliderFilterProps) => {
  const searchParams = useGetAllItemsFilters();
  const { minValue, maxValue, step, names } = props;
  const [range, setRange] = useState([searchParams[names[0]] || minValue, searchParams[names[1]] || maxValue]);
  const { setValue } = useFormContext<AllItemsFilters>();
  useEffect(() => {
    setValue(names[0], range[0]);
    setValue(names[1], range[1]);
  }, [range, names, setValue]);
  return (
    <div className='flex flex-col gap-2'>
      <Range
        values={range}
        step={step}
        min={minValue}
        max={maxValue}
        onChange={(values) => {
          setRange(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "4px",
              maxWidth: "100%",
              background: getTrackBackground({
                values: range,
                colors: ["#EAEAEA", "#EED40F", "#EAEAEA"],
                min: minValue,
                max: maxValue,
              }),
            }}
            className='mx-2 rounded-full'
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "12px",
              width: "12px",
              backgroundColor: "#7E7E7E",
            }}
            className='rounded-full'
          />
        )}
      />
      <div className='flex justify-between text-16'>
        <span>{range[0]}</span>
        <span>{range[1]}</span>
      </div>
    </div>
  );
};
