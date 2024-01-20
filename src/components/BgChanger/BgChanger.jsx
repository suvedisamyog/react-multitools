import React, { useState } from 'react';

const BgChanger = () => {
  const [color, setColor] = useState('w-full h-screen bg-white-500');

  const changeBg = (bgcolor) => {
    setColor(`w-full h-screen bg-${bgcolor}`);
  };

  return (
    <>
      <div className={color}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <button className="bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => changeBg('green-500')}>Green</button>
        <button className="bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => changeBg('red-500')}>Red</button>
        <button className="bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => changeBg('blue-500')}>Blue</button>
        <button className="bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => changeBg('white')}>White</button>
        <button className="bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => changeBg('yellow-500')}>Yellow</button>
        <button className="bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2" onClick={() => changeBg('black')}>Black</button>
        <button className="bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => changeBg('purple-500')}>Purple</button>
        <button className="bg-pink-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => changeBg('pink-500')}>Pink</button>
        <button className="bg-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => changeBg('indigo-500')}>Indigo</button>
        <button className="bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => changeBg('violet-500')}>violet</button>
        <button className="bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => changeBg('gray-500')}>Gray</button>
      </div>
    </>
  );
};

export default BgChanger;
