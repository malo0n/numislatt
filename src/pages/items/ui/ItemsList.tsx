import { useDeviceWidth } from "@/shared/hooks/useDeviceWidth";
import { useGetInfiniteItems } from "../hooks/useGetItems";
// import { SearchParamsToFilters } from "../helpers/searchParamsToFilters";
import { Loader } from "@/shared/ui";
import { ItemCard } from "@/widgets";
import { getRouteApi } from "@tanstack/react-router";
import FiltersComponent from "./FiltersComponent";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

const ItemsListRouteApi = getRouteApi("/items/");

export const ItemsList = () => {
  const searchParams = ItemsListRouteApi.useSearch();
  const queryClient = useQueryClient();
  const { data, isLoading, isError, fetchNextPage } = useGetInfiniteItems(searchParams);
  const deviceWidth = useDeviceWidth();

  useEffect(() => {
    queryClient.invalidateQueries({queryKey:['items']})
  },[searchParams, queryClient])

  if (isLoading || !data) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <section className='flex min-h-screen flex-col items-center gap-[94px]'>
      <div className=''>header</div>
      <div className='flex flex-col gap-8 px-4 lg:px-[112px] w-full'>
        <div className='flex gap-5 w-full'>
          {deviceWidth >= 1024 && <FiltersComponent></FiltersComponent>}

          <div className='flex flex-col gap-16 w-full'>
            <p className='font-montserrat text-[36px] font-medium leading-[125%]'>Our collection</p>
            <div className='grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
              {data.pages.map((group) => (
                <>
                  {group.results.map((item) => (
                    <ItemCard key={item.id} {...item} />
                  ))}
                </>
              ))}
            </div>
          </div>
        </div>

        <div onClick={() => fetchNextPage()}>pagination</div>
      </div>
    </section>
  );
};

export default ItemsList;
