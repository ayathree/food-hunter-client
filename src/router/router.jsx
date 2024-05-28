import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Secret from "../pages/Secret";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../components/Dashboard";
import Cart from "../pages/Dashboard/cart/Cart";
import AllUsers from "../pages/Dashboard/allusers/AllUsers";
import AddItems from "../pages/Dashboard/additems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/manageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/update/UpdateItem";
import Payment from "../pages/Dashboard/payment/Payment";
import PaymentHistory from "../pages/Dashboard/payment/PaymentHistory";
import UserHome from "../pages/Dashboard/userHome/UserHome";
import AdminHome from "../pages/Dashboard/adminHome/AdminHome";


const router =  createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/secret',
          element:<PrivateRouter><Secret></Secret></PrivateRouter>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
      children:[
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'cart',
          element:<Cart></Cart>

        },
        {
          path: 'payment',
          element: <Payment></Payment>

        },
        {
          path: 'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
      //  admin
      {
        path:'adminHome',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:'addItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:'updateItem/:id',
        element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader:({params})=>fetch(`https://food-hunter-server.vercel.app/menu/${params.id}`)

      },
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);

export default router;