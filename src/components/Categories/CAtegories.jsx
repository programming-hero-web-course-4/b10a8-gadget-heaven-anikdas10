import { NavLink } from "react-router-dom";
import './categories.css'

const CAtegories = () => {
    return (
        <div className="container">
          
            <div className="flex flex-col text-lg  font-bold bg-white p-4 gap-4 rounded-xl">
                <NavLink className='px-3 py-1 rounded-full bg-[rgba(128,128,128,.1)] text-center' to='/'>All Product</NavLink>
                <NavLink className='px-3 py-1 rounded-full bg-[rgba(128,128,128,.1)] text-center' to='/laptops'>Laptops</NavLink>
                
                <NavLink className='px-3 py-1 rounded-full bg-[rgba(128,128,128,.1)] text-center' to='/phones'>Phones</NavLink>
                <NavLink className='px-3 py-1 rounded-full bg-[rgba(128,128,128,.1)] text-center' to='/accessories'>Accessories</NavLink>
                <NavLink className='px-3 py-1 rounded-full bg-[rgba(128,128,128,.1)] text-center' to='smart watches'>Smart Watches</NavLink>
                <NavLink className='px-3 py-1 rounded-full bg-[rgba(128,128,128,.1)] text-center' to='/macbook'>MacBook</NavLink>
                <NavLink className='px-3 py-1 rounded-full bg-[rgba(128,128,128,.1)] text-center' to='iphone'>Iphone</NavLink>
            </div>   
        </div>
    );
};

export default CAtegories;