import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import useCart from "../hook/useCart";
import useAdmin from "../hook/useAdmin";


const Nav = () => {
  const{user, loggedOut}= useContext(AuthContext)
  const[isAdmin]=useAdmin()
  const[cart]=useCart()
  const links=<>
  <NavLink className={'text-white font-bold'} to={'/'}>Home</NavLink>
  <NavLink className={'text-white font-bold'} to={'/menu'}>Menu</NavLink>
  <NavLink className={'text-white font-bold'} to={'/order/salad'}>Order</NavLink>
  {
     user && !isAdmin && <li><Link className={'text-white font-bold'} to={'/dashboard/userHome'}>Dashboard</Link></li>

  }
  {
    user && isAdmin && <li><Link className={'text-white font-bold'} to={'/dashboard/adminHome'}>Dashboard</Link></li>
  }
  <NavLink className={'text-white font-bold'} to={'/secret'}>Secret</NavLink>
  <Link className={'text-white font-bold'} to={'/dashboard/cart'}> <button className="btn">inbox <div className="badge badge-secondary">+{cart.length}</div></button></Link>

  
  {
    user ? <>
    

    </> : <>
    <NavLink className={'text-white font-bold'} to={'/login'}>Login</NavLink>
    </>
  }
  
  </>
  const signOut=()=>{
    loggedOut()
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
    return (
        <div className="navbar fixed z-10 bg-opacity-25 bg-red-500">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>{links}</li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">Food Hunter</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
           <li className="flex flex-row justify-center items-center gap-7">{links}</li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user && <>
            <button onClick={signOut} className="btn">logOut</button>
            <p className="text-white">{user.displayName}</p></>
          }
        </div>
      </div>
    );
};

export default Nav;