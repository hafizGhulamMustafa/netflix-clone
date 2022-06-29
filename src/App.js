import { useState , useEffect} from 'react';
import './App.css';

function App() {

  // const [color, setColor]= useState("blue");
  const [car, setCar]=useState({
    name:"car",
    model: "Honda",
    color: "red"
  })
  const [count, setCount]= useState(0);

  useEffect(() => {
    setTimeout(()=>{
      setCount((count)=> count=count+1);
    }, 1000);
  },[car]);
  
  const update =()=>{
      setCar(previousStat=>{
        return{...previousStat, color:"Blue"}
      })
  }

  const [count1, setCount1] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count1 * 2);
  }, [count1]);
  const numbers = [1, 2, 3, 4, 5];
  
  console.log(numbers.map((number) => number))

  return (

    <>
  
    <h1>I've rendered {count} times!</h1>;
    <h1>The color of car is {car.model } {car.color}</h1>
    <button type="button" onClick={update}>
      Click to change
    </button>
    </>

  );
}

export default App;
