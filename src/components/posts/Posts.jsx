import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Posts = () => {

  const posts = useLoaderData()

  return (
    <div className='flex-1'>
      <h1 className="text-5xl">All Posts</h1>

      <div className='grid grid-cols-1 gap-4 my-10 md:grid-cols-2 2xl:grid-cols-3'>

        {posts.map(({id, title}) => (
          <div key={id} className='flex flex-col justify-between p-4 border-2 rounded-xl'>
            <h2 className='text-cyan-400 first-letter:uppercase'>{title}</h2>
            <Link to={`/Posts/${id}`}>
              <button>Read More</button>
            </Link>
            {/* <p className='mt-2 first-letter:uppercase'>{body}</p> */}
          </div>
        ))}
        
        </div>
    </div>
  );
};

export default Posts;