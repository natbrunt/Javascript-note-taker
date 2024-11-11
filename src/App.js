import './App.css';
import HomeComponent from './HomeComponent.js'; 
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import {useState, useEffect, useRef} from 'react';

function App() {

const [b, setB] = useState(false);
const [i, setI] = useState(0);
const [objs, saveObjs] = useState([
        {title:"To do",
        desc:['Note 1']},
        {title:"Plans for the weekend",
        desc:['Note 1']},
        {title:"1st week of December",
        desc:['Note 1']}
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

