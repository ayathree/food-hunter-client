import { Helmet } from "react-helmet-async";
import Cover from "./Cover";

import useMenu from "../../hook/useMenu";
import MenuCate from "./MenuCate";
import { Link } from "react-router-dom";




const Menu = () => {
    const [menu]=useMenu()
    const dessert = menu.filter(item=>item.category==='dessert')
    const soup = menu.filter(item=>item.category==='soup')
    const salad = menu.filter(item=>item.category==='salad')
    const pizza = menu.filter(item=>item.category==='pizza')
    return (
        <div>
            <Helmet>
                <title>Food Hunter | Menu</title>
            </Helmet>
           <div className=" mb-20 ">
           <Cover></Cover>
           </div>
          
           <h1 className="text-3xl font-bold text-center">Items</h1>
           <div>
            <MenuCate items={dessert}></MenuCate>
           
           </div>
           <div className="text-3xl font-bold text-center">
            <p>Items</p>

           </div>
           <div>
            <MenuCate items={soup}></MenuCate>
           </div>
           <h1 className="text-3xl font-bold text-center">Items</h1>
            <div>
                <MenuCate items={salad}></MenuCate>
            </div>
            <h1 className="text-3xl font-bold text-center">Items</h1>
            <div>
                <MenuCate items={pizza}></MenuCate>
            </div>
            
        </div>
    );
};

export default Menu;