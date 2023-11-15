import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../component/Navbar";
const HomeLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <div>
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};
export default HomeLayout;
