import { Helmet } from "react-helmet-async";
import Feature from "../../components/Feature";
import Banner from "./Banner";
import Slider from "./Slider";
import Testimoniuls from "./Testimoniuls";
import PopularMenu from "./popular/PopularMenu";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Food Hunter | Home</title>
            </Helmet>
            
           <div className="mb-10">
           <Banner></Banner>
           </div>
          <div className="mb-20 mt-10">
          <Slider></Slider>
          </div>
           <div className="mb-20 mt-20">
           <PopularMenu></PopularMenu>
           </div>
           <div className="mb-20 mt-20">
            <Feature></Feature>
           </div>
           <div className="mb-20 mt-20">
            <Testimoniuls></Testimoniuls>
           </div>
        </div>
    );
};

export default Home;