// import { useEffect, useState } from "react";
import MenuItem from "../../../components/MenuItem";
import useMenu from "../../../hook/useMenu";


const PopularMenu = () => {
    const[menu]=useMenu()
    const popular = menu.filter(item=>item.category==='popular')
    // const[menu, setMenu]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularMenu = data.filter(item=>item.category==='popular')
    //         setMenu(popularMenu)
    //     })
    // },[])
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
            {
                popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
            
        </div>
    );
};

export default PopularMenu;