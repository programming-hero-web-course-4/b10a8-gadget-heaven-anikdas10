import { Link } from "react-router-dom";


const Gadget = ({gadget,categori}) => {
    const {product_title,product_image,price,category,product_id}=gadget;
    
    return (
        <div className=" bg-white p-4 rounded-lg ">
           <div className=" mx-auto">
            <img className="rounded-md w-full" src={product_image} alt="" />
           </div>
           <div className="pt-4 space-y-1">
            <h3 className="font-bold text-xl md:text-2xl">{product_title}</h3>
            <p>Price:{price} $</p>
           <div className="space-y-2">
             <Link to={categori?`${product_id}`:`${category}/${product_id}`} className=" px-3 py-2 text-purple border rounded-full">View Details</Link>
           </div>
           </div>
        </div>
    );
};

export default Gadget;