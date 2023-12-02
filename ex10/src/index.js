import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyComponent from './App';

//ex1,0
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);


//ex1.1
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import MyComponent from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyComponent />);

//ex1.2
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import MyButton from "./MyButton";
// import MyList from "./MyList";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const appState = {
//   text:"My Button",
//   disabled: true,
//   items: ["First","Second","Third"],
// }

// function render (props) {
//   root.render(
//     <main>
//       <MyButton text={props.text} disabled={props.disabled}/>
//       <MyList items={props.items}/>
//     </main>
//   )
// }

// render(appState);

// setTimeout(()=> {
//   appState.disabled=false;
//   appState.items.push("Fourth");
// },2000);

//ex1.3
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import MyButton from "./MyButton";


// const root = ReactDOM.createRoot(document.getElementById("root"));

// function render({second}) {
//   root.render(
//     <main>
//       <MyButton/>
//       <MyButton text={second.text} disabled={second.disabled}/>
//     </main>
//   )
// }

// render({
//   second:{
//     text:"Second Button",
//     disabled:true,
//   }
// })



