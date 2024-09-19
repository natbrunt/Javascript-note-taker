import React, {useState} from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import {motion, AnimatePresence} from 'framer-motion';

function Sidebar({b, objs, setI, setObjs, setBt}) {

let AddNote = () => {
  setObjs((prevObjs) => {
	let pObjs = [...prevObjs];
	pObjs.unshift({
	  title: "Untitled",
	  desc: ['note0', 'note1', 'note2']
	});
	return pObjs;
  })
  setI(0);
  setBt(true)
}

  return (
  <AnimatePresence>
	{ b && (
	  <motion.div 
	    className="bg-black absolute"
	    initial={{ opacity: 0 }}
	    animate={{ opacity: 1 }}
	    exit={{ opacity: 0 }}
	    transition={{ duration: 0.5 }}
	  >
	    <button 
		className='bg-black transition-colors duration-200 hover:bg-slate-500 rounded-xl'
		onClick={AddNote}>
		<IoAddCircleOutline size={'32px'}/>
	    </button>
	    {objs.map((a, idx)=>(
		<div 
	    	  key={idx} 
	   	  onClick={()=>setI(idx)}
	   	  className="bg-black cursor-pointer transition-colors duration-300 hover:bg-gray-500">
		  {a.title}
	    </div>))}
	</motion.div>
	)}
  </AnimatePresence>
  )
}

export default Sidebar
