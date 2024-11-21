import { useGetItems } from "../hooks/useGetItems";
// import { SearchParamsToFilters } from "../helpers/searchParamsToFilters";
import { Loader } from "@/shared/ui";
import { ItemCard } from "@/widgets";



export const ItemsList = () => {
  // const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const { data, isLoading, isError } = useGetItems();

  
  if (isLoading || !data) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  const { results, next, previous, count } = data;

  return <>
    {results.map((item) => (
      <ItemCard key={item.id} {...item} />
    ))}
    {/* <button onClick={() => console.log(SearchParamsToFilters(urlSearchParams))}>srlfsrf</button> */}
  </>;
};

export default ItemsList;
