import React from "react";
import { Link, useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className="flex flex-col flex-3">
      <h1 className="text-5xl">It is Users</h1>

      <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map(({id, name, username, email, address: {zipcode}}) => (

          <div key={id} className="p-3 border-2 rounded-xl">
            <h2 className="font-black text-cyan-300">{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <p>{zipcode}</p>
            <Link to={`/users/${id}`} className="inline-block mt-3 px-3 py-1 text-sm border-2 rounded-lg cursor-pointer">More Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
