import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loader as SinglecocktaileLoader } from "./pages/Cocktail";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import {
  HomeLayout,
  About,
  Landing,
  Cocktail,
  Newslatter,
  Error,
} from "./pages";
import { action as newsLetterAction } from "./pages/Newslatter";
import { Loader as landingLoader } from "./pages/Landing";
import SinglePageError from "./pages/SinglePageError";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
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
        loader: landingLoader(queryClient),
      },
      { path: "about", element: <About /> },
      {
        path: "newsletter",
        element: <Newslatter />,
        action: newsLetterAction,
      },
      {
        path: "Cocktail/:id",
        element: <Cocktail />,
        loader: SinglecocktaileLoader(queryClient),
        errorElement: <SinglePageError />,
      },
    ],
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
