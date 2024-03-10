import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [products] = useContext(ProductContext);

    let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);

    distinct_category = [...new Set(distinct_category)];

    console.log(distinct_category);



    return (
        <div className="w-[15%] h-screen bg-zinc-50 text-center flex flex-col items-center p-4">
            <a
                href="/create"
                className="hover:bg-sky-600 m-5 p-2 bg-sky-500 font-semibold border-2 rounded-sm"
            >
                Create Product
            </a>
            <hr className="w-[80%] my-3" />
            <h1 className="text-2xl mb-3 items-center cursor-pointer hover:bg-zinc-400 p-1">
                Category Filter
            </h1>
            <div className="w-[80%] flex flex-col">
                {distinct_category.map((c,i)=>{
                   return <Link key={i} to={`/?category=${c}`} className="text-start flex p-2 mb-3 text-[10px] font-medium capitalize">
                    <span className="rounded-full bg-pink-400 mr-2 w-[15px] h-[15px]"></span>{" "}
                    {c}
                </Link>
                })}

            </div>
        </div>
    );
};

export default Navbar;
