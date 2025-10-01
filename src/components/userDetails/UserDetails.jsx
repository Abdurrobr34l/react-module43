import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const {
    id,
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lan },
    },
    phone,
    website,
    company: { name: companyName, catchPhase, bs },
  } = user;

    const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col flex-3">
        <h1 className="text-5xl">It is User Details</h1>
      
      <div className="mx-auto my-10">

        <div
          key={id}
          className="flex flex-col gap-5 p-3 border-2 rounded-xl"
        >
          <h2 className="font-black text-cyan-300">{name}</h2>
          <p>{username}</p>
          <p>{email}</p>

          <p className="flex gap-5">
            <span>{street}</span>
            <span>{suite}</span>
            <span>{city}</span>
            <span>{zipcode}</span>
          </p>

          <p className="flex gap-5">
            <span>{lat}</span>
            <span>{lan}</span>
          </p>

          <p>{phone}</p>
          <p>{website}</p>

          <p className="flex gap-5">
            <span>{companyName}</span>
            <span>{catchPhase}</span>
            <span>{bs}</span>
          </p>

        <button onClick={navigateBack} className="mt-5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition-all">Go Back</button>
        </div>

      </div>
      </div>
    </>
  );
};

export default UserDetails;
