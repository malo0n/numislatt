import { FilterComponentProps } from "@/shared/types/props";
import { Filters } from "@/shared/ui/filters/Filters";
import { Sort } from "@/shared/ui/filters/Sort";
export const FiltersComponent = (props: FilterComponentProps) => {
  return (
    <div className='sticky top-[108px] mt-[108px] flex h-fit w-full max-w-[289px] select-none flex-col gap-5'>
      <Sort></Sort>
      <Filters countries={props.countries}></Filters>
    </div>
  );
};

export default FiltersComponent;
