import { IoStar ,IoStarHalfOutline,IoCartOutline} from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredCardList, addToStoreWishList } from "../Utility/db";
import { useState } from "react";


const GadgetDetails = () => {
    const [isDisabled,setDisabled]=useState(false)

    const data = useLoaderData();

    const {product_id}=useParams();

    const productIdInt = parseInt(product_id);

    const gadget = data.find(gadget=>gadget.product_id===productIdInt);
   
    const {product_title,product_image,price,description,Specification,availability,rating}=gadget;

    const handleAddToCard = gadget =>{
       addToStoredCardList(gadget); 
    };
    const handleAddToWishList = (gadget) =>{
        addToStoreWishList(gadget);
       
    }
    return (
        <div className="relative min-h-screen">
             <div className="bg-purple mx-4 rounded-xl">
            <div className="container pb-32 md:pb-40 lg:pb-60 py-10">
                <div className="text-white space-y-3">
            <h1 className="w-3/4 text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold text-center mx-auto">Product Details</h1>
            <p className="w-3/4 md:w-1/2 text-sm md:text-lg text-center mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
           </div>
            </div>
        </div>
           <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/3">
             <div className="container bg-white flex gap-4 space-y-2 p-8 rounded-xl">
           <div className="w-1/3">
            <img className="rounded-md" src={product_image} alt="" />
           </div>
            <div className="w-2/3 space-y-2">
                <h3 className="text-2xl font-bold">{product_title}</h3>
                <p>Price: ${price}</p>
                <p className="text-green bg-bg_green px-3  border inline-block rounded-full">{availability?"In Stock":"Stock Out"}</p>
                <p>{description}</p>
                <h6 className="font-bold text-lg">Specification:</h6>
                <ul>
                    {
                        Specification.map((specification,index)=><li key={index}>{specification}</li>)
                    }
                </ul>
                <h6 className="font-bold text-xl">Rating</h6>
               <div className="flex items-center text-yellow">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalfOutline />
                    <p className="text-black px-2 ">{rating}</p>
               </div>
               <div className="flex items-center gap-4">
                <button onClick={()=>handleAddToCard(gadget)} className="flex items-center gap-1 bg-purple text-white font-bold text-lg px-4 py-2 rounded-full">Add to Card <IoCartOutline></IoCartOutline></button>
                <button onClick={()=>{handleAddToWishList(gadget);
                setDisabled(true)}
                } className="p-3 border rounded-full" disabled={isDisabled}><FaRegHeart></FaRegHeart></button>
               </div>
            </div>
        </div>
           </div>
        </div>
    );
};

export default GadgetDetails;