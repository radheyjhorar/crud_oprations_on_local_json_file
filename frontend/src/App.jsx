import "./app.css";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Dashboard, Error, Contacts, SignIn, SignUp } from "./pages";
import { Layout } from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
