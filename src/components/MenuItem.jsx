import { Link } from "react-router-dom";


const MenuItem = ({item}) => {
    const{name,image,price,recipe}=item
    return (
        <div>
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px '}} className="w-[100px]" src={image} alt="" />
            <div>
                <p>{name}--------</p>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
            
        </div>
       
        </div>
    );
};

export default MenuItem;