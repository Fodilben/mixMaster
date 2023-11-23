import Wrapper from "../assets/wrappers/CocktailCard";
import { Link } from "react-router-dom";
const CocktailCart = ({ id, glass, img, name, info }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={img} alt="img" className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/Cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};
export default CocktailCart;
