import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useCart from "../../../hook/useCart";


const Cart = () => {
    const[cart,refetch]=useCart()
    const totalPrice = cart.reduce((total,item)=>total+item.price,0)
    const axiosSecure = useAxiosSecure()
    const handleDelete=id=>{
        axiosSecure.delete(`/carts/${id}`)
        .then(res=>{
           if (res.data.deletedCount >0) {
            alert('deleted successfully')
            refetch()
             
           }
        })

    }
    return (
        <div>
            <div className="flex justify-evenly">
            <h1 className="text-xl">Item: {cart.length}</h1>
            <h1 className="text-xl">Total price: {totalPrice}</h1>
           {
            cart.length ?  <Link to={'/dashboard/payment'}><button className="btn btn-primary">Pay</button></Link>
           : <button disabled className="btn btn-primary">Pay</button>}
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item, index)=> <tr key={item._id}>
            <th>
                {index+1}
            
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
             {item.name}
            </td>
            <td>{item.price}</td>
            <th>
              <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs">delete</button>
            </th>
          </tr>)
      }
     
     
    </tbody>
    
    
  </table>
</div>
            
        </div>
    );
};

export default Cart;