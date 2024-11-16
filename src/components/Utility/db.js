import toast from "react-hot-toast";


const getStoredCardList = () =>{
    const storedListStr = localStorage.getItem('card-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList; 
    }
    else{
        return [];
    }
}   

const addToStoredCardList= (gadget)=>{
    const storedList = getStoredCardList();
    const isExists = storedList.find(item => item.product_id == gadget.product_id);
    if(isExists){
        toast.error("Card Already Added!", {
          duration: 2000,
        });
    }
    else{
        storedList.push(gadget);
        const storedListstr = JSON.stringify(storedList);
        localStorage.setItem('card-list',storedListstr);
        toast.success("Successfully Added to Card!");

    }
}

const getWishList = ()=>{
    const getWishLIstStr = localStorage.getItem('wish-list');
    if(getWishLIstStr){
        const getStoredWishList= JSON.parse(getWishLIstStr);
        return getStoredWishList;
    }
    else{
        return [];
    }
}

const addToStoreWishList = (gadget)=>{
    const storedWishList = getWishList();
    const isExists = storedWishList.find(
      (item) => item.product_id == gadget.product_id
    );
    if(isExists){
        toast.error("Card Already Added!", {
          duration: 2000,
        });
    }
    else{
      storedWishList.push(gadget);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list',storedWishListStr);
        toast.success("Successfully Added to WishList!");
    }
}

// remove gadget 
const removeCardList = id =>{
    const cardList = getStoredCardList();
    const remained = cardList.filter(gadget => gadget.product_id !==id);
   localStorage.setItem("card-list", JSON.stringify(remained));
   toast.success("Successfully Removed!"); 
   calculateTotalPrice(remained);
}
// removeWish List
const removeWishList = id =>{
  const wishList = getWishList();
  const remained = wishList.filter((gadget) => gadget.product_id !== id);
  localStorage.setItem("wish-list", JSON.stringify(remained));
  toast.success("Successfully Removed!");   
}
// get total price
const getTotalPrice = () => {
  const totalPriceStr = localStorage.getItem("total");

  if (totalPriceStr) {
    return JSON.parse(totalPriceStr);
  } else {
    return 0;
  }
};
// total cart price 
const calculateTotalPrice = (gadget)=>{
const total = gadget.reduce((sum, gadget) => sum + gadget.price, 0);
localStorage.setItem('total',JSON.stringify(total))
}

export {
  addToStoredCardList,
  addToStoreWishList,
  getStoredCardList,
  getWishList,
  removeCardList,
  removeWishList,
  getTotalPrice,
  calculateTotalPrice
};