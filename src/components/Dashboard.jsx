import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hook/useCart";
import useAdmin from "../hook/useAdmin";


const Dashboard = () => {
    const[cart]=useCart()

    const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                        <li>
                        <NavLink to={'/dashboard/manageItems'}>Manage items </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/manageBooking'}>manageBookings</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/admin'}>Admin  home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/addItems'}>Add item</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/users'}>All Users</NavLink>
                    </li>
                   
                        
                        </>: <>
                        <li>
                        <NavLink to={'/dashboard/cart'}>My cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/booking'}>My bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/home'}>User home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/review'}>Review</NavLink>
                    </li>
                    <li>
                    <NavLink to={'/dashboard/history'}>Payment History</NavLink>

                    </li>
                    <li>
                    <NavLink to={'/dashboard/paymentHistory'}>Payment real History</NavLink>

                    </li>
                   
                        
                        </>
                    }
                    <div className="divider">

                    </div>
                    <li>
                    <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to={'/order/salad'}>Menu</NavLink>
                    </li>
                    <li>
                    <NavLink to={'/order/contact'}>contact</NavLink>
                    </li>

                </ul>

            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;