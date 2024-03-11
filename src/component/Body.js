import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouting = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouting} />
    </div>
  );
};

export default Body;