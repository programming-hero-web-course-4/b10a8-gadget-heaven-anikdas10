import { MdDeleteForever } from "react-icons/md";

const WishList = ({gadget,handleDeleteWishList}) => {
    const {product_image,product_title,description,price,product_id}=gadget;

    return (
        <div className="flex items-center gap-5 bg-white p-4 rounded-lg">
            <div className=" w-1/5">
                <img className="rounded-lg" src={product_image} alt="" />
            </div>
            <div className="flex-grow">
                <h2 className="font-bold text-xl lg:text-2xl">{product_title}</h2>
                <p className="text-lg lg:text-xl">{description}</p>
                <p className="font-bold text-lg lg:text-xl">Price: {price}</p>
            </div>
            <div onClick={()=>handleDeleteWishList(product_id)} className="text-2xl pr-4">
                <button><MdDeleteForever /></button>
            </div>
        </div>
    );
};

export default WishList;