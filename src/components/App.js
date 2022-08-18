// //DONE

import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"

  const handleDarkMode = (e) => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{isDarkMode ? "Light" : "Dark" } Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

















































// //Attempt 3 8/11

// import React, {useState} from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {

//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const [isDarkMode, setIsDarkMode] = useState(false)

//   const handleDarkMode = () => {
//     setIsDarkMode(isDarkMode => !isDarkMode)
//   }
//   const appClass = isDarkMode ? "App dark" : "App light"

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={handleDarkMode}>{isDarkMode ? "Light" : "Dark "} Mode</button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;
















































// // //REVIEW ATTEMPT 8/11 2 (almost w/o looking); complete

// import React, {useState} from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// //set state, declare variable, onClick, event handler, label

// function App() {

//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const [isDarkMode, setIsDarkMode] = useState(false)


//   const handleDarkMode = () => {
//     setIsDarkMode(isDarkMode => !isDarkMode)
//   }
//   console.log(isDarkMode)

//   const appClass = isDarkMode ? "App dark" : "App light"

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={handleDarkMode}> {isDarkMode ? "Light Mode" : "Dark Mode"}</button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;


























// //REVIEW ATTEMPT 8/11 1 (looking at answer); complete

// import React, {useState} from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {

//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const [isDarkMode, setIsDarkMode] = useState(false)
//   console.log(isDarkMode)

//   const handleDarkMode = () => {
//     setIsDarkMode(isDarkMode => !isDarkMode)
//   }

//   const appClass = isDarkMode ? "App dark" : "App light"


//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={handleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"} </button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;




//COMPLETED SOLUTION 
// import React, {useState} from "react"; //changed to useState
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false) //declare variable
//   console.log(isDarkMode)

//   const handleDarkMode = () => {
//     setIsDarkMode(isDarkMode => !isDarkMode)    //event handler
//   }
//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const appClass = isDarkMode ? "App dark" : "App light" //changed to isDarkMode

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={handleDarkMode}> {isDarkMode ? "Light Mode" : "Dark Mode" } </button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//           //give onClick functionality to button and button text

//   );
// }

// export default App;
