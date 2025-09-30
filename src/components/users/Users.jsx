import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {

  const users = useLoaderData();
  console.log(users);

  return (
    <div className="flex flex-col border-2 flex-3 h-[80vh]">
      <h1 className="text-5xl">It is Users</h1>

      <div className="mt-10 grid grid-cols-4 gap-5">
        {users.map(user =>
        // {{name} = users }
          <div className="p-3 border-2 rounded-xl">
            <h2 className="font-black text-cyan-300">{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
