import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateTotalPrice, getStoredCardList, getTotalPrice, getWishList, removeCardList, removeWishList } from "../Utility/db";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { HiAdjustmentsVertical } from "react-icons/hi2";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import image from '../../assets/Group.png'

const DashBoard = () => {
    const [gadgets,setGadgets]=useState([]);

    const [isActive,setActive]=useState(true);

    const [wishGadgets,setWishGadgets]=useState([]);

    const [gadgetPrice, setGadgetPrice]=useState(0);

   const [selectedIndex, setSelectedIndex] = useState(0);

   const [isTrue,setTrue]=useState(true);

   const navigate=useNavigate();

    useEffect(()=>{
        const storedCardList = getStoredCardList(); 
        setGadgets(storedCardList);
        calculateTotalPrice(storedCardList)
        const totalPrice = getTotalPrice();
        setGadgetPrice(totalPrice);
        {totalPrice===0?setTrue(true):setTrue(false)}
    },[]);

    useEffect(()=>{
        const storedWishList= getWishList();
        setWishGadgets(storedWishList);
        
    },[]);

    
    const handleCartButton = ()=>{
       setSelectedIndex(0); 
      setActive(true)
    };


    const handleWishButton =()=>{
       setSelectedIndex(1);
       setActive(false)
    };

    const handleCardDelete = id =>{
         
        removeCardList(id);
        const storedCardList = getStoredCardList(); 
        setGadgets(storedCardList);

        const totalPrice = getTotalPrice();
        setGadgetPrice(totalPrice);
        {totalPrice===0?setTrue(true):setTrue(false)}
        
    }

    const handleDeleteWishList = id =>{
           removeWishList(id); 
           const storedWishList= getWishList();
         setWishGadgets(storedWishList);
         
         
    };

    const handleSort = ()=>{
        const sortedGadget = [...gadgets].sort((a,b)=>b.price - a.price);
        setGadgets(sortedGadget)
    };

    const handlePurchase = () =>{
        localStorage.removeItem('card-list');

        const storedCardList = getStoredCardList();

        setGadgets(storedCardList); 
    }
    
    const closeModal = (e) =>{

        e.preventDefault();
        
        navigate('/');
    }

    return (
        <div>
           <div className="bg-purple  rounded-b-md py-8">
            <div className="container ">
                <div className="text-white space-y-3">
            <h1 className="w-3/4 text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold text-center mx-auto">Dashboard</h1>
            <p className="w-3/4 md:w-1/2 text-sm md:text-lg text-center mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
           </div>
           <div className="flex items-center justify-center gap-4">
            <button onClick={
                handleCartButton} 
            className= {isActive?'text-purple bg-white px-6 py-1 rounded-full font-bold text-lg mt-4':'text-white bg-purple px-6 py-1 rounded-full border font-bold text-lg mt-4'}>Cart </button>

            <button onClick={handleWishButton} className={isActive?'text-white bg-purple px-4 py-1 rounded-full border font-bold text-lg mt-4':'text-purple bg-white px-4 py-1 rounded-full border font-bold text-lg mt-4'}>WishList</button>
           </div>
            </div>
        </div>

       <div className="container mt-10">

         <div className="flex items-center justify-between">

            <h3 className="font-bold text-xl md:text-2xl lg:text-3xl">{selectedIndex===0?"Cart":"WishList"}</h3>

            <div className={selectedIndex===1?'hidden':'flex items-center gap-6'}>

                <h3  className="font-bold text-xl md:text-2xl">Total Cost :{gadgetPrice.toFixed(2)}</h3>

                <button onClick={handleSort} className="text-purple text-xl font-bold px-4 py-2 border rounded-full flex items-center gap-1">Sort by Price <HiAdjustmentsVertical /></button>

                <button  onClick={()=>{document.getElementById('my_modal_5').showModal();handlePurchase();}
                } className={isTrue?'bg-gray text-purple px-4 py-2 text-xl rounded-full':"text-white bg-purple px-4 py-2 text-xl rounded-full"} disabled={isTrue}>Purchase</button>
            </div>
        </div>
        {/* tabs */}
        <Tabs selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
        <TabList>
          <Tab></Tab>
          <Tab></Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-3 mt-10">
            {
            gadgets.map(gadget=><Cart key={gadget.product_id} gadget={gadget} handleCardDelete={handleCardDelete}></Cart>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-3 mt-10">
            {
            wishGadgets.map(gadget=><WishList key={gadget.product_id} gadget={gadget} handleDeleteWishList={handleDeleteWishList}></WishList>)
          }
          </div>
        </TabPanel>
      </Tabs>
      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box py-8 px-10">
    <div className="flex items-center justify-center flex-col gap-3">
        <img src={image} alt="" />
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">Payment SuccessFull</h2>
        <div className="text-center">
            <p className="text-lg">Thanks for Purchasing</p>
        <p className="font-semibold text-lg">Total:{gadgetPrice}</p>
        </div>
    </div>
    <div className="modal-action flex items-center justify-center ">
      <form method="dialog" className="w-full">
        <button onClick={closeModal} className="px-6 py-2 bg-gray text-xl font-bold w-full rounded-full">Close</button>
      </form>
    </div>
  </div>
</dialog>
      {/* modal */}
       </div>
        </div>
    );
};

export default DashBoard;