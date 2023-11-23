import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../component/CocktailList";
import SearchForm from "../component/SearchForm";
import { useQuery } from "@tanstack/react-query";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const searchQuery = (searchVal) => {
  return {
    queryKey: ["search", searchVal || "all"],
    queryFn: async () => {
      const response = await axios.get(`${url}${searchVal}`);
      return response.data.drinks;
    },
  };
};
export const Loader =
  (queryClient) =>
  async ({ request }) => {
    const turl = new URL(request.url);
    const searchVal = turl.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchQuery(searchVal));
    return { searchVal };
  };
const Landing = () => {
  const { searchVal } = useLoaderData();
  const { data: drinks } = useQuery(searchQuery(searchVal));
  return (
    <div>
      <SearchForm searchVal={searchVal} />
      <CocktailList drinks={drinks} />
    </div>
  );
};
export default Landing;
