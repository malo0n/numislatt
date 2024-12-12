import { useDeviceWidth } from "@/shared/lib";
import { Loader } from "@/shared/ui";
import { ItemCard } from "@/pages/items/ui/ItemCard";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGetCountries, useGetInfiniteItems } from "@/pages/items/lib";
import { useGetAllItemsFilters } from "@/shared/lib";
import { Sort, Filters } from "@/pages/items/ui";

export const Items = () => {
  const searchParams = useGetAllItemsFilters();
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetInfiniteItems(searchParams);
  const { data: countries, isLoading: isLoadingCountries, isError: isErrorCountries } = useGetCountries();
  const deviceWidth = useDeviceWidth();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isError || isErrorCountries) {
    return <div>Error</div>;
  }

  return (
    <div className='flex w-full flex-col gap-8 px-4 lg:px-[112px]'>
      {isLoadingCountries || !countries ? (
        <Loader />
      ) : (
        <>
          <div className='flex w-full gap-5'>
            {countries && deviceWidth >= 1024 && (
              <div className='sticky top-[108px] mt-[108px] flex h-fit w-full max-w-[289px] select-none flex-col gap-5'>
                <Sort></Sort>
                <Filters countries={countries}></Filters>
              </div>
            )}

            <div className='flex w-full flex-col gap-16'>
              <p className='font-montserrat text-[36px] font-medium leading-[125%]'>Our collection</p>
              {isLoading || !data ? (
                <Loader />
              ) : (
                <div className='grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                  {data.pages.map((group) => (
                    <>
                      {group.results.map((item) => (
                        <ItemCard key={item.id} {...item} />
                      ))}
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div ref={ref} onClick={() => fetchNextPage()}>
            pagination
          </div>
        </>
      )}
    </div>
  );
};
