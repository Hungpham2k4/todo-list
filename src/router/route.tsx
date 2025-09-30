import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoPage from "../pages/TodoPage";

export default function AppRoute() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TodoPage />,
    },
  ]);

  return <RouterProvider router={router}/>
}
