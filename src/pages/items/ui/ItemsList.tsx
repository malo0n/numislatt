import { useDeviceWidth } from "@/shared/hooks/useDeviceWidth";
import { useGetInfiniteItems } from "../hooks/useGetItems";
// import { SearchParamsToFilters } from "../helpers/searchParamsToFilters";
import { Loader } from "@/shared/ui";
import { ItemCard } from "@/widgets";
import { getRouteApi } from "@tanstack/react-router";

const ItemsListRouteApi = getRouteApi("/items/");

export const ItemsList = () => {
  const searchParams = ItemsListRouteApi.useSearch();
  console.log(searchParams);
  
  const { data, isLoading, isError, fetchNextPage } = useGetInfiniteItems(searchParams);
  const deviceWidth = useDeviceWidth();

  if (isLoading || !data) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <section className='flex min-h-screen flex-col items-center gap-[94px] relative'>
      <div className=''>header</div>
      <div className='flex flex-col gap-8 px-4 lg:px-[112px]'>
        <div className="flex gap-5">
          {deviceWidth >= 1024 && <div className='w-[289px] bg-secondaryWhite mt-[108px] sticky top-[108px]'>filters</div>}

          <div className='flex flex-col gap-16'>
            <p className='font-montserrat text-[36px] font-medium leading-[125%]'>Our collection</p>
            <div className='grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
              {data.pages.map((group) => (
                <>
                  {
                    group.results.map((item) => (
                      <ItemCard key={item.id} {...item} />
                    ))
                  }
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
