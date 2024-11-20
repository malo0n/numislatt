import { useSearchParams } from "react-router-dom";
import { useGetItems } from "../hooks/useGetItems";
import { SearchParamsToFilters } from "../helpers/searchParamsToFilters";
import { Loader } from "@/shared/ui";
import { ItemCard } from "@/widgets";



const ItemsList = () => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const { data, isLoading, isError } = useGetItems(urlSearchParams);

  if (isLoading || !data) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return <>
    {data.map((item) => (
      <ItemCard key={item.id} {...item} />
    ))}
    <button onClick={() => console.log(SearchParamsToFilters(urlSearchParams))}>srlfsrf</button>
  </>;
};

export default ItemsList;
