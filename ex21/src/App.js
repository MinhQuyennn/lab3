//ex2.1

import * as React from "react";

function App() {
  const [name, setName] = React.useState("Adam");
  const [age, setAge] =React.useState(35);
  return (
    <>
        <p>My name is {name}</p>
        <p>My age is {age}</p>
    </>
   
  );
}

export default App;


//ex2.2 2.3
// import * as React from "react";

// function App() {
//   const [name, setName] = React.useState("Adam");
//   const [age, setAge] =React.useState(35);
//   return (
//     <>
//       <section>
//         <input value={name}
//         onChange={(e) => setName(e.target.value)}/>
//         <p>My name is {name}</p>
//       </section>
//       <section>
//         <input type="nuber" value={age}
//         onChange={(e) => setAge(e.target.value)}/>
//         <p>My age is {age}</p>
//       </section>
//     </>
   
//   );
// }

// export default App;