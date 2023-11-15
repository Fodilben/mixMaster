import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../component/CocktailList";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const Loader = async () => {
  const searchVal = "";
  const response = await axios(`${url}${searchVal}`);
  return { drinks: response.data.drinks };
};
const Landing = () => {
  const { drinks } = useLoaderData();
  console.log(drinks);
  return <div>{<CocktailList drinks={drinks} />}</div>;
};
export default Landing;
