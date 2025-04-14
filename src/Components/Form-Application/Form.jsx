


import { useState } from "react";
import "./form.css";
import Successful from "./Successful";

export default function Form() {


  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    age: "",
    employee: false,
    salary: "",
  });

  let btnDis = inputs.name == "" || inputs.age == "" || inputs.phone == "";

  const [isVisable, setIsVisable] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function handleFormClick(){
    if(inputs.age > 60 || inputs.age < 20){
      setErrorMessage('The Age is not Allowed')
    }
    else if(inputs.phone.length > 11 || inputs.phone.length < 11){
      setErrorMessage('The Phone Number is not Allowed')
    }
    setIsVisable(true)
  }

  return (
    <div className="container"
    onClick={()=>{
      if(isVisable){setIsVisable(false)}
    }}>
      <form onSubmit={(event)=>{event.preventDefault()}}>
        <h1>Requesting a Lean</h1>
        <hr />

        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={inputs.name}
            onChange={(event) => {
              setInputs({ ...inputs, name: event.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">PhoneNumber:</label>
          <input
            type="text"
            id="phoneNumber"
            value={inputs.phone}
            onChange={(event) => {
              setInputs({ ...inputs, phone: event.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={inputs.age}
            onChange={(event) => {
              setInputs({ ...inputs, age: event.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="employee">Are you an employee:</label>
          <input
            type="checkbox"
            id="employee"
            checked={inputs.employee}
            onChange={(event) => {
              setInputs({ ...inputs, employee: event.target.checked });
            }}
          />
        </div>

        <div>
          <label htmlFor="salar">Salar:</label>
          <select
            name="salary"
            value={inputs.salary}
            onChange={(event) => {
              setInputs({ ...inputs, salary: event.target.value });
            }}
          >
            <option>Less than 5000</option>
            <option>6800</option>
            <option>9300</option>
          </select>
        </div>

        <button
         className={btnDis ? "grey" : ""}
         disabled={btnDis}
         onClick={handleFormClick}>
          Submit
        </button>
      </form>

      {isVisable?
      <div className='success'>
      <Successful errorMessage={errorMessage}/>
      </div>:
      <div></div>}

    </div>
  );
}
