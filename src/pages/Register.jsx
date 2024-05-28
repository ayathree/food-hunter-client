import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hook/useAxiosPublic";
import GoogleLogin from "../components/GoogleLogin";


const Register = () => {
  const axiosPublic = useAxiosPublic()
  const {createUser,updateUser}=useContext(AuthContext)
  const navigate= useNavigate()
    const {
        register,
        handleSubmit,
        reset,
       
        formState: { errors },
      } = useForm()

      const onSubmit = (data) =>{
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser)
          updateUser(data.name, data.photo)
          .then(()=>{
            console.log('updated')
            const userInfo= {
              name: data.name,
              email: data.email
            }
            axiosPublic.post('/users', userInfo)
           .then(res=>{
            if (res.data.insertedId) {
              console.log('user added at database')
              reset
              navigate('/')
              
            }
           })
            
          })
          .catch(error=>{
            console.log(error.message)
          })
         
        })
        .catch(error=>{
          console.log(error.message)
        })
      }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" {...register("name")} name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="url" {...register("photo")} name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" {...register("email")} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" {...register("password",{
            required:true, minLength:6, maxLength:16,
          })} className="input input-bordered" required />
         {errors.password?.type==="minLength" && <p className="text-red-600">Password must 6 characters</p> }
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <Link to={'/login'}>Already have an account? <span className='text-blue-700'>signin</span></Link>
        <GoogleLogin></GoogleLogin>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;