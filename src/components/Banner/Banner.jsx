import image from '../../assets/banner.jpg'

const Banner = () => {
    return (
       <div className='relative mb-52 md:mb-80 '>
         <div className="bg-purple mx-4 rounded-b-md py-4">
            <div className="container pb-32 md:pb-40 lg:pb-60">
                <div className="text-white space-y-3">
            <h1 className="w-3/4 text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold text-center mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="w-3/4 md:w-1/2 text-sm md:text-lg text-center mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
           </div>
           <div className="text-center">
            <button className="text-purple bg-white px-3 py-1 rounded-full font-bold text-lg mt-4 ">Shop Now</button>
           </div>
            </div>
        </div>

        <div className='container absolute left-1/2 -translate-y-1/3  -translate-x-1/2  '>
             <img className='w-3/5  mx-auto rounded-md border p-4 border-white' src={image} alt="" />
        </div>
       </div>
         
    );
};

export default Banner;