import img from '../assets/home/featured.jpg'
import './Feature.css'

const Feature = () => {
    return (
        <div className='flex justify-center gap-10 items-center bg-fixed py-8 px-16 feature '>
            <img className='w-1/3' src={img} alt="" />
           <div>
           <p className='bg-slate-500 bg-opacity-25'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore aliquid soluta repellendus mollitia explicabo, cum, fugit nam nihil quasi pariatur voluptatum quidem necessitatibus molestias autem amet tenetur labore. Tempora?</p>
            <button className='btn'>Read more..</button>
           </div>
            
        </div>
    );
};

export default Feature;