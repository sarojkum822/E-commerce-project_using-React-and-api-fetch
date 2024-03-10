import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../utils/axios';
import Loading from './Loading';

const Details = () => {

    const [product,setProduct]= useState([]);

     const { id } = useParams();

    console.log(id);


    const getSingleproduct = async () => {

        try {

            const { data } = await axios.get(`/products/${id}`)
                // console.log(data);

                setProduct(data);

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(()=>{
        getSingleproduct();
    },[]);

    return product ? (
        <>
            <div className='w-full h-screen bg-white border-[2px] ml-20 mr-20 mt-32 p-4 flex'>
               
                <div className='flex flex-col'>
                    <div className='w-[22vw] h-[26vw] bg-white items-center flex justify-center' >
                        <img src={product.image} alt="" className='w-[24vw] h-[24vw]' />
                    </div>
                    <div className='flex gap-[4.1vh] mt-4'>
                        <div className='bg-orange-400 p-4 w-[12vw] h-14'>ADD TO CART</div>
                        <div className='bg-orange-400 p-4 w-[12vw] h-14'>BUY NOW</div>
                    </div>
                </div>
                <div className=''>
                    <h2 className='text-[13px] font-thin ml-2'>Home-Details</h2>
                    <div className='ml-2 p-4'>
                        <h2 className='text-2xl'>{product.title}</h2>
                        <p className='p-1 items-center flex justify-center rounded-sm bg-green-700 text-white w-12 h-6 font-semibold'>4.9</p>

                        <p className='text-green-600'>Extra Rs110 off</p>
                        <p className='text-3xl'>Rs-{product.price}</p>
                    </div>
                    <div className='p-4'>
                        <Link className='m-2 px-6 text-center border bg-blue-200 p-2'>Edit</Link>
                        <Link className='px-6 text-center border bg-red-200 p-2'>Delete</Link>

                    </div>
                </div>
            </div>
        </>
        
    ):(<Loading/>)
}

export default Details