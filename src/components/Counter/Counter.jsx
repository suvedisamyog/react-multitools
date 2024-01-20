import React, { useState } from 'react'

const Counter = () => {
const [count,setCount]=useState(0);
const counterOperations=(operation)=>{
    switch(operation){
        case 'increase':
            setCount(count+1);
            break;
        case 'decrease':
            setCount(count-1);
            break;
        case 'reset':
            setCount(0);
            break;
        default:
            setCount(0);
            break;

    }
}


  return (
<>
    <center><h2 className='text-2xl font-bold '>Counter App</h2>
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10 bg-blue-200"> 
    <div className="font-bold text-xl mb-2 py-4">{count}</div>
 <div className="px-6 pt-4 pb-2">
    <button className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={()=>counterOperations('increase')}>Increase</button>
    <button className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={()=>counterOperations('decrease')}>Decrease</button>
    <button className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={()=>counterOperations('reset')}>Reset</button>
  </div>
</div>

</center>
 
    

</>
  )
}

export default Counter