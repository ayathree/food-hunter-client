import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import axios from "axios";
import useAxiosSecure from "../hook/useAxiosSecure";
import useCart from "../hook/useCart";



const TabLk = ({item}) => {
    const{name,image,price,recipe,_id}=item
    const {user}= useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure()
    const [,refetch]=useCart()
    const handleAddToCart=()=>{
     if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,price


      }
      axiosSecure.post('/carts', cartItem)
      .then(res=>{
        console.log(res.data)
        if (res.data.insertedId) {
          alert('added successfully')
          refetch()
        }
      })
     }
     else{
      alert('please login to add to the cart')
      navigate('/login', {state:{from: location}})
     }



    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <p>{price}</p>
    <div className="card-actions">
      <button onClick={handleAddToCart} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default TabLk;