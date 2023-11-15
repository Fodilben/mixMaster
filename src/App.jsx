import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Cocktail,
  Newslatter,
  Error,
} from "./pages";

import { Loader as landingLoader } from "./pages/Landing";
import SinglePageError from "./pages/SinglePageError";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      { path: "about", element: <About /> },
      { path: "newsletter", element: <Newslatter /> },
      { path: "Cocktail", element: <Cocktail /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
