import logo from './logo.svg';
import {useState} from "react";
import './App.css';


function App() {
const [ weight, setWeight] = useState(0);
const [bottles, setBottles] = useState(0);
const [time, setTime] = useState(0);
const [gender, setGender] = useState("male");
  return (
    <div>
    <div class= "row-align-items-start"></div>  
<h3>Calculating alcohol blood level</h3>
<div>
<label>Weight</label>
<input name="weight" type="number" step="1"></input>


</div>
<br></br>
<div>
  
<label>Bottles</label>
<select name= "bottles" type="number">
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

<select name= "time" class="time">
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
<input type="radio" name="gender"  value="male" defaultChecked/><label>Male</label>
<input type="radio" name="gender" value="female" defaultChecked/><label>Female</label>
</div>
<div>
  <output></output>
</div>

<button>Calculate</button>


    </div>
  );
}

export default App;
