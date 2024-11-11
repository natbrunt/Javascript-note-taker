import React from 'react'
import { CgAirplane } from "react-icons/cg";
import {useState, useEffect, useRef} from 'react';
import { FaPenSquare } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

function HomeComponent({objs, i, saveObjs, bt, setBt, titleRef}) {
const[bools, setBools] = useState([])
const[form, setForm] = useState({
	title: objs[i].title,
	desc: objs[i].desc
})
const inputRef = useRef(null);

useEffect(()=>{
	console.log('primary useEffect')
	setForm({
		title: objs[i].title,
		desc: objs[i].desc
	})
	InitializeBools();
	if (titleRef.current) {
         titleRef.current.focus();
        }

},[i, objs])

useEffect(()=> {
	console.log("secondary useEffect")
	if (inputRef.current) {
	  inputRef.current.focus();
	}
}, [bools])

useEffect(()=> {
  console.log("third useEffect")
 if (titleRef.current) {
         titleRef.current.focus();
  }
},[bt])

let AddItem = () => {
  setForm(ps=>({
  	...ps,
	desc: [...ps.desc, 'note']
  }))
  setBools((prevBools) => {
	let nA = [...prevBools];
	nA.push(true);
	return nA;
  })
}


let HandleChangeDesc = (index, value) => {
  /*This prev is declared outright
  and then will return in a bracket function*/
  setForm(prev => {
	const n = [...prev.desc]
	n[index] = value;
	return { ...prev, desc: n}
  })
}

let SaveRoot = () => {
	saveObjs((prevObjs) =>{
	  let pObjs = [...prevObjs];
	  pObjs[i] = form;
	  return pObjs;
	})
}

let HandleEditMode = (e, idx) => {
	e.preventDefault()
	bools[idx] && SaveRoot(); 
	setBools(bools.map((edit,i) => (i ===idx ? !edit : edit)))
}

let InitializeBools = () => {
	let len = objs[i].desc.length
	let boolsAr = new Array(len).fill(false)
	setBools(boolsAr);
}

let HandleSubmit = (e) => {
	e.preventDefault()
	e.target[0].name === 'title' && setBt(false)
	SaveRoot()
}

let HandleChange = (e) => {
	e.preventDefault();
	setForm({
		...form,
		[e.target.name] : e.target.value
	})
}

let DeleteNote = () => {
	console.log("delete note")
	saveObjs((prevObjs) => {
		let pA = [...prevObjs];
		pA.splice(i,1);
		return pA;
	})
}

let DeleteSubNote = (index) => {
	console.log("delete subnote")
	saveObjs((prevObjs)=>{
		let pA = [...prevObjs];
		pA[i].desc.splice(index, 1);
		return pA;
	})
}

  return (
  <div className="flex flex-col h-screen bg-[#282c34] items-center">
	<h1 className='text-9xl my-8'>🚀</h1>
	<div className="text-yellow-400 text-2xl mb-3">
	<b>JS-Note-Taker</b></div>
	
	{bt ? <div className="flex flex-row items-center"> 
		<button
		  onClick={DeleteNote}>
		  <MdDeleteForever size={'22px'}/>
		</button>
		<form onSubmit={HandleSubmit}> 
		<input
		  ref={titleRef}
	          onChange={HandleChange}
		  value={form.title} name="title" 
		  className="bg-black text-center mb-1 text-4xl max-w-[24rem]"
		/> <button><FaCheck size={'22px'}/></button>
	</form></div>
	:
	<div className='mt-1 mb-1 text-4xl flex flex-row items-center'> <b>{form.title}</b> <button 
		  onClick={()=>{setBt(true)}}> 
		  <FaPenSquare />
		</button> </div>
	}
	<ul className="flex flex-col items-center text-xl"> 
	{bools.map((isEdit, index)=>(
	  isEdit ? <li key={index} className='flex 
		  flex-row items-center'> <button
		    onClick={() => DeleteSubNote(index)}> 
		    <MdDeleteForever size={'22px'}/>
		  </button> <form onSubmit={(e)=> 
		    HandleEditMode(e, index)}> <input
	  	      onChange={e => 
                      HandleChangeDesc(index, 
                      e.target.value)} 
                      value={form.desc[index]} 
                      name={index} ref={inputRef} 
                      className="bg-black text-center"
		    /> <button> <FaCheck size={'22px'}/> </button> 
		  </form>
		</li>
		:
		<li
		  className='mt-1' 
		  key={index}> {form.desc[index]} 
		  <button
		    className="ml-1"
		    onClick={(e)=> HandleEditMode(e,index)}> 
                    <FaPenSquare size={'16px'}/>
                  </button> </li>
	))}
	</ul>
	<button
	  className="mt-2"
	  onClick={AddItem}>
		<IoAddCircleOutline size={'32px'}/>
	</button>

  </div> )
}

export default HomeComponent
