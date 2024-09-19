import React, {useState} from 'react'

function Navbar({setB, b}) {

  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(prevState => !prevState);
  };

  /*toggle for MongoDB Atlas (Remote) and MongoDB Compass (Local)*/


  return (
<div
  className='bg-black flex flex-row justify-between items-center'>
   <div 
    className='bg-black text-white text-5xl pb-2 cursor-pointer transition-colors duration-200 hover:bg-gray-500'
    onClick={()=> setB(!b)}>≡
   
   </div>
   <button
     onClick={toggle}
     className={`px-4 py-2 font-semibold text-white rounded-full transition-colors duration-500 ${
          isToggled ? 'bg-gray-900' : 'bg-gray-700'
        }`}>
	{isToggled ? 'REMOTE' : 'LOCAL'}
   </button>
</div>
  )
}

export default Navbar
