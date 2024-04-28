import Home from "./pages/Home";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";
import Products from "./pages/Products";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import Mail from "./pages/Mail";
import Page404 from "./pages/Page404";
import PrivateRouts from "./pages/PrivateRouts";
import Login from "./pages/Login";

const routers = [
  { path: "/", element: <Login /> },
  {
    path: "*",
    element: <PrivateRouts />,
    children: [
      { path: "home", element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "newUser", element: <NewUser /> },
      { path: "products", element: <Products /> },
      { path: "transactions", element: <Transactions /> },
      { path: "reports", element: <Reports /> },
      { path: "Mail", element: <Mail /> },
      { path: "*", element: <Page404 /> },
    ],
  },
];

export default routers;
