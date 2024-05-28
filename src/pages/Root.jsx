import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const Root = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
         { noHeaderFooter ||   <Nav></Nav>}
            <Outlet></Outlet>
        { noHeaderFooter ||  <Footer></Footer>}
            
        </div>
    );
};

export default Root;