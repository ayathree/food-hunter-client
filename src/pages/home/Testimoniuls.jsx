import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';


const Testimoniuls = () => {
    const[review, setReview]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)
        })
    },[])
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       <div className='m-24'>
       {
            review.map(item=><SwiperSlide key={item._id}>
                <Rating
      style={{ maxWidth: 180 }}
      value={item.rating}
      readOnly
    />
                <p>{item.details}</p>
                <p>{item.name}</p>
            </SwiperSlide>)
        }
        
       </div>
      </Swiper>
    );
};

export default Testimoniuls;