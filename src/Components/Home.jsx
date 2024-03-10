import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';

const Home = () => {
  const [products] = useContext(ProductContext);

  return products ? (
    <>
      <Navbar />

      <div className='flex flex-wrap w-5/6 mx-auto overflow-x-hidden overflow-y-auto'>
        {products.map((p, i) => (
          <Link
            to={`/details/${p.id}`}
            key={p.id}
            className='w-1/5  p-4 border-2 h-[30vh] m-4 flex flex-col items-center justify-center rounded-md overflow-hidden'
          >
            <div className='image w-full h-4/5 bg-no-repeat bg-center mb-2'>
              <img src={p.image} alt="bag" className='w-full h-full object-contain hover:scale-105' />
            </div>
            <h1 className='text-black overflow-hidden hover:text-blue-400 text-center'>{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
