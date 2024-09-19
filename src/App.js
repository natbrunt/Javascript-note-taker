import './App.css';
import HomeComponent from './HomeComponent.js'; 
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import {useState, useEffect, useRef} from 'react';

function App() {

const [b, setB] = useState(false);
const [i, setI] = useState(0);
const [objs, saveObjs] = useState([
        {title:"Vacation plans to USA",
        desc:['a0', 'a1', 'a2']},
        {title:"Vacation plans to the UK",
        desc:['b0', 'b1', 'b2']},
        {title:"Vacation plans to go Skiing in Colorado with my friends",
        desc:['c0', 'c1', 'c2']}
]);

/*Logic for focus title on creation*/
const titleRef = useRef(null);
const [bt, setBt] = useState(false);

useEffect(()=>{
  //empty
},[])


  return (
    <div className="text-white">
	<Navbar 
		b={b} 
		setB={setB}
	/>
	<Sidebar 
		objs={objs}
		b={b}
		setObjs={saveObjs}
		setI={setI}
		setBt={setBt}
	/>
	<HomeComponent 
		i={i}
		objs={objs}
		saveObjs={saveObjs}
		bt={bt}
		setBt={setBt}
		titleRef={titleRef}
	/>
    </div>
  );
}

export default App;

