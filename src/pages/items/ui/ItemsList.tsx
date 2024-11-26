import { useDeviceWidth } from "@/shared/hooks/useDeviceWidth";
import { useGetInfiniteItems } from "../hooks/useGetItems";
import { Loader } from "@/shared/ui";
import { ItemCard } from "@/widgets";
import { getRouteApi } from "@tanstack/react-router";
import FiltersComponent from "../../../widgets/FiltersComponent";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useGetCountries } from "../hooks/useGetCountries";
import { useInView } from "react-intersection-observer";

const ItemsListRouteApi = getRouteApi("/items/");

export const ItemsList = () => {
  const searchParams = ItemsListRouteApi.useSearch();
  const queryClient = useQueryClient();
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } = useGetInfiniteItems(searchParams);
  const { data: countries, isLoading: isLoadingCountries, isError: isErrorCountries } = useGetCountries();
  const deviceWidth = useDeviceWidth();
  const {ref, inView} = useInView()
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["items"] });
  }, [searchParams, queryClient]);

  useEffect(() => {
    if(inView) fetchNextPage()
  }, [inView, fetchNextPage]);

  if (isLoading || !data || isLoadingCountries || !countries) {
    return <Loader />;
  }
  if (isError || isErrorCountries) {
    return <div>Error</div>;
  }
  return (
    <section className='flex min-h-screen flex-col items-center gap-[94px]'>
      <div className=''>header</div>
      <div className='flex w-full flex-col gap-8 px-4 lg:px-[112px]'>
        <div className='flex w-full gap-5'>
          {deviceWidth >= 1024 && <FiltersComponent countries={countries} />}

          <div className='flex w-full flex-col gap-16'>
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

        <div ref={ref} onClick={() => fetchNextPage()}>pagination</div>
      </div>
    </section>
  );
};

export default ItemsList;
