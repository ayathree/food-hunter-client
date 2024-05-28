import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItem = () => {
const{name, recipe, category, price, _id} = useLoaderData();

    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
      console.log(data)
      const imageFile = {image:data.image[0]}
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers:{
          'content-type' : 'multipart/form-data'
        }
      });
      if (res.data.success) {
        const menuItem={
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          image: res.data.data.display_url
        }
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
        console.log(menuRes.data)
        if (menuRes.data.modifiedCount > 0) {
          alert('data updated successfully')
          reset()
          
          
        }
        
      }
  
      console.log(res.data)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
        <label className="form-control w-full my-6 ">
  <div className="label">
    <span className="label-text">Recipe name*</span>
    
  </div>
  <input type="text" defaultValue={name} placeholder="recipe name" {...register('name')} className="input input-bordered w-full " />
 
</label>
        </div>
      
      
      <div className="flex flex-row gap-6">
        {/* category */}
        <div>
        <label className="form-control w-full my-6 ">
  <div className="label">
    <span className="label-text">Category*</span>
    
  </div>
  <select defaultValue={category} {...register('category')} className="select select-bordered w-full ">
  <option >Select a category</option>
  <option value='salad'>Salad</option>
  <option value='pizza'>Pizza</option>
  <option value='soup'>Soup</option>
  <option value='dessert'>Dessert</option>
</select>
</label>
        </div>
        {/* price */}
        <div>
        <label className="form-control w-full my-6 ">
  <div className="label">
    <span className="label-text">Price*</span>
    
  </div>
  <input type="number" defaultValue={price} placeholder="price" {...register('price')} className="input input-bordered w-full " />
 
</label>

        </div>
      </div>
      <label className="form-control mb-7">
  <div className="label ">
    <span className="label-text">Recipe details</span>
   
  </div>
  <textarea  {...register('recipe')} defaultValue={recipe} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
  
</label>
<input {...register('image')} type="file" className="file-input w-full max-w-xs" />
      
     <button className="btn">update item</button>
    </form>
            </div>
    );
};

export default UpdateItem;