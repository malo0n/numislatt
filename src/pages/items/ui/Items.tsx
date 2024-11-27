import { useDeviceWidth } from "@/shared/hooks/useDeviceWidth";
import { Loader } from "@/shared/ui";
import { ItemCard } from "@/widgets";
import FiltersComponent from "@/widgets/FiltersComponent";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGetCountries } from "../hooks/useGetCountries";
import { useGetInfiniteItems } from "../hooks/useGetItems";
import { useGetAllItemsFilters } from "../hooks/useGetAllItemsFilters";

export const Items = () => {
  const searchParams = useGetAllItemsFilters();
  const { data, isLoading, isError, fetchNextPage } = useGetInfiniteItems(searchParams);
  const { data: countries, isLoading: isLoadingCountries, isError: isErrorCountries } = useGetCountries();
  const deviceWidth = useDeviceWidth();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) fetchNextPage();
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
            {countries && deviceWidth >= 1024 && <FiltersComponent countries={countries} />}

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
