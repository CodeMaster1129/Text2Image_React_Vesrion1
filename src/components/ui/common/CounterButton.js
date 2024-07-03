import React, { useState } from 'react';

const CounterButton = () => {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    if(count > 0)
        setCount(count - 1);
  };

  // Function to decrement the count
  const deletecount = () => {
    setCount(0);
  };
  return (
    <div className='flex border-[1px] border-gray-300 rounded-tl-lg rounded-bl-lg justify-between'>
        <div className='w-3/4'>{count}</div>
        <div className='flex flex-col border-[1px] border-gray-300 rounded-lg'>
            <img className="w-2 h-2 float-right" src='images/up.png' onClick={increment} alt=''/>
            <img className="mt-1 w-2 h-2" src='images/down.png' onClick={decrement} alt=''/>
        </div>
        <div className='ml-2 pr-2'>
            <img className='w-4 h-4 mt-1' src='images/trashcan.png' onClick={deletecount} alt=''/>
        </div>
    </div>
  );
};

export default CounterButton;
