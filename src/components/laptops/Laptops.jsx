import React from "react";
import { Link, useLoaderData } from "react-router";

const Laptop = () => {
  const laptopsData = useLoaderData();
  console.log(laptopsData);

  return (
    <div className="flex-1">
      <h1 className="text-5xl">It is Laptop</h1>

      <div className="grid grid-cols-1 gap-4 my-10 md:grid-cols-2 2xl:grid-cols-3">
        {laptopsData.map(
          ({
            id,
            brand,
            model,
            processor,
            ram,
            storage,
            graphics,
            price,
            rating,
          }) => (
            <div key={id} className="p-5 border-2">
              <div className="mt-4">
                <h2 className="text-xl font-bold">
                  {brand} {model}
                </h2>
                <p className="text-gray-600 mt-1">{processor}</p>
                <p className="text-gray-600">
                  {ram} | {storage}
                </p>
                <p className="text-gray-600">{graphics}</p>
                <p className="text-lg font-semibold mt-2">${price}</p>
                <p className="text-yellow-500">⭐ {rating}</p>
              </div>

              <Link to={`/laptop/${id}`} className="inline-block mt-3">
                <button className="cursor-pointer">View Details</button>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Laptop;
