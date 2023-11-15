import CocktailCart from "./CocktailCart";
import Wrapper from "../assets/wrappers/CocktailList";
const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h1>no matching cocktails found</h1>;
  }
  const renameDrinks = drinks.map((drink) => {
    const { strAlcoholic, strGlass, idDrink, strDrinkThumb, strDrink } = drink;

    return {
      glass: strGlass,
      name: strDrink,
      img: strDrinkThumb,
      info: strAlcoholic,
      id: idDrink,
    };
  });

  return (
    <Wrapper>
      {renameDrinks.map((drink) => {
        return <CocktailCart key={drink.id} {...drink} />;
        // return <h1 key={drink.id}>fixing the problem</h1>;
      })}
    </Wrapper>
  );
};
export default CocktailList;
