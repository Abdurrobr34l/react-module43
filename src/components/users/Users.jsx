import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className="flex flex-col border-2 flex-3 h-[80vh]">
      <h1 className="text-5xl">It is Users</h1>

      <div className="mt-10 grid grid-cols-4 gap-5">
        {users.map(({id, name, username, email, address: {zipcode}}) => (

          <div key={id} className="p-3 border-2 rounded-xl">
            <h2 className="font-black text-cyan-300">{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <p>{zipcode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
