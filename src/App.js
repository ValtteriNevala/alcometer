import logo from './logo.svg';
import {useState} from "react";
import './App.css';


function App() {
const [ weight, setWeight] = useState(0);
const [bottles, setBottles] = useState(0);
const [time, setTime] = useState(0);
const [gender, setGender] = useState("male");
const [result, setResult] = useState(0);

function handleSubmit(e) {

  e.preventDefault();
  
 let alcolevel= 0;
 

     let litres = bottles * 0.33

   let grams = litres * 8 * 4.5

   let burning= weight/10
 let leftgrams = grams - (burning * time)

  if ( gender === "male") {
alcolevel = leftgrams / (weight * 0.7)

  }
  else {
alcolevel = leftgrams / (weight * 0.6)

  }

setResult (alcolevel);

}


  return (
    <>
      <form onSubmit={handleSubmit}>
    <div class= "row-align-items-start"></div>  
<h3>Calculating alcohol blood level</h3>
<div>
<label>Weight</label>
<input type="number" onChange= {e => setWeight (e.target.value)} value= {weight} />


</div>
<br></br>
<div>
  
<label>Bottles</label>
<select name= "bottles" type="number" onChange= {e => setBottles (e.target.value)} value= {bottles} >
<option value="0">0</option> 
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
</select>


</div>
<br></br>
<div>
  
<label>Time</label>

<select name= "time" class="time" onChange= {e => setTime (e.target.value)} value= {time}>
<option value="0">0</option> 
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
</select>


</div>

<div>
<label>Gender</label>
<input type="radio" name="gender"  value="male" defaultChecked onChange= {e => setGender (e.target.value)}/><label>Male</label>
<input type="radio" name="gender" value="female" defaultChecked onChange= {e => setGender (e.target.value)}/><label>Female</label>
</div>
<div>
  <output>{result}</output>
</div>

<button>Calculate</button>


    
    </form>
    </>
  );
}

export default App;
