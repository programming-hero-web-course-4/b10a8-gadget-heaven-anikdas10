import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import CAtegories from "../Categories/CAtegories";


const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <div className="container grid grid-cols-10 ">
            <div className="col-span-10 mb-6 ">
                <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold lg:mt-24 mb-10">Explore Cutting-Edge Gadgets</h2>
            </div>
            <div className='col-span-4 md:col-span-3'><CAtegories ></CAtegories>
            </div>
            <div className="col-span-6 md:col-span-7"> 
                <Outlet></Outlet>
            </div>
           </div>
        </div>
    );
};

export default Home;