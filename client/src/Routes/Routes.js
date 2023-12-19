import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
import Home from "../Pages/Home/Home";
import PlaceOrderGetway from "../payment/PlaceOrderGateway";
import MyOrders from "../Pages/Dashboard/MyOrders";
import ProductDetails from "../Pages/ProductDetailsPage";
import AddProduct from "../Pages/Dashboard/AddProduct";
import DashboardLayout from "../layout/DashboardLayout";
import MyProducts from "../Pages/Dashboard/MyProducts";
import ProductsForSearch from "../Pages/ProductsSearchPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/Profile";
import ChangePassword from "../Pages/Dashboard/ChangePassword";
import SuccessMesssage from "../payment/SuccessMessage";
import Cart from "../Pages/Dashboard/Cart";
import Products from "../Pages/ProductsPage";
import PaymentFail from "../payment/FailMessage";
import UpdateProfile from "../Pages/Dashboard/UpdateProfile";
import Wishlist from "../Pages/Dashboard/Wishlist";
import SellerRoute from "./SellerRoute";
import UserRoute from "./UserRoute";
import AdminRoute from "./AdminRoute";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AllProducts from "../Pages/Dashboard/AllProducts";
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
        path: "/products/search",
        element: <ProductsForSearch />,
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
        path: "/payment_gateway/success",
        element: <SuccessMesssage />,
      },
      {
        path: "/payment_gateway/fail",
        element: <PaymentFail />,
      },
      {
        path: "/order/place_order",
        element: <PlaceOrderGetway />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [
      {
        path: "/dashboard/add_product",
        element: (
          <SellerRoute>
            <AddProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/profile/update_info",
        element: <UpdateProfile />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/orders",
        element: (
          <UserRoute>
            <MyOrders />
          </UserRoute>
        ),
      },
      {
        path: "/dashboard/all_users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all_products",
        element: (
          <AdminRoute>
            <AllProducts />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/cart",
        element: (
          <UserRoute>
            <Cart />
          </UserRoute>
        ),
      },
      {
        path: "/dashboard/wishlist",
        element: (
          <UserRoute>
            <Wishlist />
          </UserRoute>
        ),
      },

      {
        path: "/dashboard/products",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/change_password",
        element: <ChangePassword />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);
