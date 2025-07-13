import React from 'react';
// import './components.css';

const Card = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-5 mx-auto">
        <div className=" mx-auto flex flex-col lg:flex-row flex-wrap">
          
          {/* Left: Image */}
          <div className="lg:w-1/2 w-full">
            <img
              alt="ecommerce"
              className="w-full h-full object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>

          {/* Right: Product Details */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-white text-3xl title-font font-medium mb-2">The Catcher in the Rye</h1>
            
            <p className="leading-relaxed text-sm mb-6">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
              cornhole raw denim forage brooklyn. Everyday carry seitan poutine.
            </p>

            {/* Size Selector */}
            <div className="mb-6">
              <label htmlFor="size" className="block mb-2 text-sm">Select Size</label>
              <select
                id="size"
                className="rounded border border-gray-700 bg-transparent text-white py-2 pl-3 pr-8 focus:ring-2 focus:ring-purple-900 focus:outline-none"
              >
                <option>XSM</option>
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>

            {/* Price & Button */}
            <div className="flex items-center">
              <span className="title-font font-medium text-2xl text-white">$58.00</span>
              <button className="ml-auto bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
