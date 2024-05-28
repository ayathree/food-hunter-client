import { Link } from "react-router-dom";
import MenuItem from "../../components/MenuItem";

 
const MenuCate = ({items}) => {
   
    

    return (
       <div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-11">
             {
                items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
            
        </div>
        {
            items.slice(0,1).map(item=><Link key={item._id} to={`/order/${item.category}`}><button className="btn bg-blue-700 text-white">Order <span>{item.category}</span></button></Link>)
        }
        
       </div>
    );
};

export default MenuCate;