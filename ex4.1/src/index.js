// import React from 'react';
// import ReactDOM from 'react-dom'; // Fix import statement
// import './index.css';

// const element = (
//   <div style={{
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "15px",
//     backgroundColor: "#d0f0c0",
//     border: "1px solid green", 
//     height: "100vh",
//   }}>
//     Green is the prime color of the world
//   </div>
// );

// ReactDOM.render(element, document.getElementById('root'));


// //ex4.2
// import React from 'react';
// import ReactDOM from 'react-dom'; // Correct import statement
// import { Button } from 'antd';

// const showAlert = () => {
//   alert("Alert!");
// }

// const element = (
//   <Button style={{ margin: "10px 10px" }} type="primary" onClick={showAlert}>
//     Click me
//   </Button>
// );

// ReactDOM.render(element, document.getElementById("root"));

import * as React from "react";
import * as ReactDOM from "react-dom";
const smartPeople = [
  { name: "Johann Gorthe", age: 82, IQ: 210 },
  { name: "Albert Einstein", age: 76, IQ: 205 },
  { name: "Leonardo da Vinci", age: 67, IQ: 180 },
  { name: "Isaac Newton", age: 84, IQ: 190 },
  { name: "James MaxWell", age: 48, IQ: 190 },
  { name: "Rudolf Clausius", age: 66, IQ: 190 },
  { name: "Nicolaus Copernicus", age: 70, IQ: 160 },
  { name: "Gottfried Leibniz", age: 70, IQ: 182 },
];

const element = (
  <ul>
    {smartPeople.map((person, index)=>(
      <li key={index}>
        <strong>Name: </strong>
        {person.name},
        <strong>Age: </strong>
        {person.age},
        <strong>IQ: </strong>
        {person.IQ}
      </li>
    ))}
  </ul>
);

ReactDOM.render(element,document.getElementById('root'));