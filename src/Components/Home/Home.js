import React from 'react';
import Homereview from '../Homereview/Homereview';

const Home = () => {
    return (
        <div className="mt-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <div className="p-5 lg:mt-10">
            <h1 className="text-6xl font-bold px-10">HEADPHONE REVIEW</h1>
            <h1 className="text-5xl pt-5 px-10 font-bold text-indigo-600">
              Headphones Online shop
            </h1>
            <p className="flex justify-center text-xl text-justify px-10 pt-5">
            You can buy headphines online with a few clicks or a convenient phone call.
            </p>
            <button className="text-white mt-5 mx-10 bg-indigo-500 hover:bg-indigo-600 rounded p-3 font-bold">
              Order Now
            </button>
          </div>
          <div>
            <img
              className="h-[400px] w-80 mx-10"
              src="https://diamu.com.bd/wp-content/uploads/2020/09/Plextone-PC780-Gaming-Headphones-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
        </div>
        <Homereview></Homereview>
      </div>
    );
};

export default Home;