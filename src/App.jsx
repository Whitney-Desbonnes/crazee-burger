import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/login/OrderPage";
import ErrorPage from "./components/pages/login/ErrorPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  // state (état, données)
  const router = createBrowserRouter([
    {
      path:"/",
      element: <LoginPage/>,
      errorElement: <ErrorPage/>,
    },
    {
      path:"/order/:inputValue",
      element: <OrderPage/>
    },
  ])

  // comportements

  // render / affichage
  return <RouterProvider router={router}/>;
}

export default App;