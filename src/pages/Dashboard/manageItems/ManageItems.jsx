import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useMenu from "../../../hook/useMenu";


const ManageItems = () => {
    const[menu, , refetch]=useMenu()
    const axiosSecure = useAxiosSecure()
    const handleDelete = async(item)=>{
        const res = await axiosSecure.delete(`/menu/${item._id}`)
        console.log(res.data)
        if (res.data.deletedCount > 0) {
            alert(`${item.name}deleted successfully`)
            refetch()
            
        }


    }
    return (
        <div>
            <h1>manage items</h1>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th>#</th>
        <th>Image</th>
        <th>Item name</th>
        <th>Price</th>
        <th>Updated</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {menu.map((item, index)=><tr key={item._id}>
        <td>
          {index + 1}
        </td>
        <td>
          
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="" />
               
              </div>
            </div>
            
         
        </td>
        <td>
         {item.name}
        </td>
        <td>${item.price}</td>
        <td>
         <Link to={`/dashboard/updateItem/${item._id}`}> <button  className="btn btn-ghost btn-xs">update</button></Link>
        </td>
        <td>
            <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-xs">delete</button>
        </td>
      </tr>)}
      
    
    </tbody>
    
    
  </table>
</div>
            </div>
            
        </div>
    );
};

export default ManageItems;