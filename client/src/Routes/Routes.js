import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Components/ErrorPage";
// import DashboardLayout from "../layout/DashboardLayout";
import Blog from "../Pages/Blog";
// import AddAProduct from "../Pages/Dashboard/AddAProduct/AddAProduct";
// import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
// import AllUsers from "../Pages/Dashboard/AllUser/AllUsers";
// import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
// import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
// import Reported from "../Pages/Dashboard/Reported/Reported";
// import Wishlist from "../Pages/Dashboard/WishList/Wishlist";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
// import Payment from "../Payment/Payment";
// import AdminRoute from "./AdminRoute";
// import PrivateRoute from "./PrivateRoute";
// import SellerRoute from "./SellerRoute";
// import UserRoute from "./UserRoute";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      // {
      //   path: "/dashboard",
      //   element: (
      //     <PrivateRoute>
      //       <DashboardLayout />
      //     </PrivateRoute>
      //   ),
      //   children: [
      //     {
      //       path: "/dashboard/allUsers",
      //       element: <AllUsers />,
      //     },
      //     {
      //       path: "/dashboard/allSellers",
      //       element: <AllSeller />,
      //     },
      //     {
      //       path: "/dashboard/addProduct",
      //       element: <AddAProduct />,
      //     },
      //     {
      //       path: "/dashboard/myProducts",
      //       element: <MyProducts />,
      //     },
      //     {
      //       path: "/dashboard/myOrders",
      //       element: <MyOrders />,
      //     },
      //     {
      //       path: "/dashboard/wishlist",
      //       element: <Wishlist />,
      //     },
      //     {
      //       path: "/dashboard/myOrders",
      //       element: <MyOrders />,
      //     },
      //     {
      //       path: "/dashboard/report",
      //       element: <Reported />,
      //     },
      //     {
      //       path: "/dashboard/payment/:id",
      //       loader: ({ params }) =>
      //         fetch(`http://localhost:5000/booking/${params.id}`),
      //       element: <Payment />,
      //     },
      //   ],
      // },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
