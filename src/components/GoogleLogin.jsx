import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useAxiosPublic from "../hook/useAxiosPublic";


const GoogleLogin = () => {
    const{ googleSignIn}=useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
            const userInfo={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })
            
        })

    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn">Google</button>
        </div>
    );
};

export default GoogleLogin;