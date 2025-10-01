import React from "react";
import { useLoaderData } from "react-router";

const LaptopDetails = () => {
  const laptop = useLoaderData();

  const {
    brand,
    model,
    processor,
    ram,
    storage,
    graphics,
    price,
    rating,
    display,
    battery,
    os,
    weight,
    description,
  } = laptop;

  return (
    <div className="flex flex-col items-center mx-auto px-4 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold text-cyan-600 mb-8">Laptop Details</h1>

      <div className="flex flex-col md:flex-row rounded-xl overflow-hidden max-w-5xl w-full">
        {/* Left: Image or placeholder */}
        <div className="md:w-1/2 bg-gray-200 flex items-center justify-center p-6">
          <img
            src="https://via.placeholder.com/400x300?text=Laptop+Image"
            alt={`${brand} ${model}`}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          {/* Title and description */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-500">
              {brand} - {model}
            </h2>
            <p className="mt-2 text-gray-700">{description}</p>
          </div>

          {/* Specs grid */}
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-gray-800">
            <p>
              <span className="font-semibold">Processor:</span> {processor}
            </p>
            <p>
              <span className="font-semibold">RAM:</span> {ram}
            </p>
            <p>
              <span className="font-semibold">Storage:</span> {storage}
            </p>
            <p>
              <span className="font-semibold">Graphics:</span> {graphics}
            </p>
            <p>
              <span className="font-semibold">Display:</span> {display}
            </p>
            <p>
              <span className="font-semibold">Battery:</span> {battery}
            </p>
            <p>
              <span className="font-semibold">OS:</span> {os}
            </p>
            <p>
              <span className="font-semibold">Weight:</span> {weight}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {rating} ⭐
            </p>
            <p className="text-xl font-bold text-green-600 col-span-2">
              Price: ${price}
            </p>
          </div>

          {/* Buy Button */}
          <div className="mt-6">
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopDetails;
