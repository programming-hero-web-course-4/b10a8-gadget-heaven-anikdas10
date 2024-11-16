import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex items-center justify-center ">
            <h1 className="font-bold text-3xl lg:text-4xl">Data not found</h1>
            <Link to='/' className="text-xl font-bold text-purple bg-gray py-4 px-2 rounded-full border">Back to Home</Link>
        </div>
    );
};

export default Error;