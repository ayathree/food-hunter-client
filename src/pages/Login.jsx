import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../components/GoogleLogin';

const Login = () => {

    const captchaRef = useRef(null)
    const[disable, setDisable]=useState(true)
    const{signIn}= useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin=e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {email,password};
        console.log(newUser)

        signIn(email,password)
        .then(result=>{
            const user = result.user
            console.log(user)
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const handleValidation=()=>{
        const user_captcha_value = captchaRef.current.value
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {

           setDisable(false) 
        }
        else{
            setDisable(true)
        }

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" ref={captchaRef} name="captcha" placeholder="captcha" className="input input-bordered" required />
               <button onClick={handleValidation} className='btn btn-outline btn-xs mt-2'>Validate</button>
              </div>
              <div className="form-control mt-6">
                <button disabled={disable} className="btn btn-primary">Login</button>
              </div>
              <Link to={'/register'}>Do not have an account? <span className='text-blue-700'>register</span></Link>
              <GoogleLogin></GoogleLogin>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;