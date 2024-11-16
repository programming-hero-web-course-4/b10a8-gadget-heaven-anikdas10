
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
    const data = useLoaderData();
    const {category}=useParams();
    const [gadgets,setGadgets]=useState([]);
    useEffect(()=>{
        if(category){
            const filteredGadgets= [...data].filter(gadget=>(gadget.category === category)
            );
            setGadgets(filteredGadgets);
        }
        else{
            setGadgets(data);
        }
    },[category])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <h3 className={gadgets.length ===0?'Flex col-span-3 text-center font-bold text-xl md:text-2xl lg:text-3xl':'hidden'}>No Data Available</h3>
           {
            gadgets.map(gadget=><Gadget key={gadget.product_id} gadget={gadget} categori={category}></Gadget>)
           }
        </div>
    );
};

export default Gadgets;