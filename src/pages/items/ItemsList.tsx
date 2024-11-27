import { SearchHeader } from "./ui/SearchHeader";
import { FormProvider, useForm } from "react-hook-form";
import { AllItemsFilters } from "./model/types";
import { useSubmitFilters } from "./hooks/useSubmitFilters";
import { Items } from "./ui/Items";


export const ItemsList = () => {
  const methods = useForm<AllItemsFilters>();
  const { handleSubmit } = methods;
  const onSubmit = useSubmitFilters()
  return (
    <FormProvider {...methods}>
      <form
        id='items'
        name='items'
        onSubmit={handleSubmit(onSubmit)}
        className='flex min-h-screen flex-col items-center gap-[94px]'
      >
        <SearchHeader/>
        <Items/>
      </form>
    </FormProvider>
  );
};

export default ItemsList;
