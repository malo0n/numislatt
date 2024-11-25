import { AllItemsFilters } from "@/pages/items/model/types";
import { SliderFilterProps } from "@/shared/types/props";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Range, getTrackBackground } from "react-range";

export const SliderFilter = (props: SliderFilterProps) => {
  const { minValue, maxValue, step, names } = props;
  const [range, setRange] = useState([minValue, maxValue]);
  const { setValue } = useFormContext<AllItemsFilters>();
  return (
    <>
      <Range
        values={range}
        step={step}
        min={minValue}
        max={maxValue}
        onChange={(values) => {
          setValue(names[0], values[0]);
          setValue(names[1], values[1]);
          setRange(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "4px",
              width: "100%",
              background: getTrackBackground({
                values: range,
                colors: ["#EAEAEA", "#EED40F", "#EAEAEA"],
                min: minValue,
                max: maxValue,
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
    </>
  );
};
