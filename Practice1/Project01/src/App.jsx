import { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

 
  const valueUpdate = () => {
    console.log(`Name: ${name}, Email: ${email}`);
  }

  return (
    <>
      <div className="container-item">
      
        <input
          className="nameSection"
          onChange={(event) => setName(event.target.value)}
          value={name}
          type="text"
          placeholder="Enter Your Name"
        />

  
        <input
          className="emailSection"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          type="text"
          placeholder="Enter Your Email"
        />

    
        <button className="btnSection" onClick={valueUpdate}>
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
