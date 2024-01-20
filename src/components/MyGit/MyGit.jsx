import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MyGit = () => {
    const data=useLoaderData()
  return (
    <>
      <div className="max-w-lg mx-auto w-full flex items-center justify-center mt-16">
        <div className="max-w-sm w-full rounded overflow-hidden shadow-lg">
          <img className="w-full" src="https://avatars.githubusercontent.com/u/72150195?v=4" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.name}</div>
            <p className="text-gray-700 text-base">
             {data.bio}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
          <p>Visit Github:</p>
          <a href={data.html_url} target="_blank">
              {data.html_url}
            </a>         
             </div>
        </div>
      </div>
    </>
  );
};

export default MyGit;
