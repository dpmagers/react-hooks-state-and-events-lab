import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("all") 

  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value)
  }

  let filteredList = items.filter(item => {
    if (selectedCategory === "All") return true
    return (item.category === selectedCategory)
  })

  // let filteredList = items.filter(item => {
    //     if (selectedCategory === "All") return true
    //     return (item.category === selectedCategory)
    //   })
    console.log(selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChangeCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;





















































// //attempt 3

// // In the ShoppingList component, there is a <select> element 
// // that will allow us to filter the list of items by category.

// // Use the useState hook to create a state variable called 
// // selectedCategory for keeping track of the selected value 
// // from this <select> element. When the value of the <select> 
// // element is changed, update state.

// // You should also use the selectedCategory variable to 
// // determine which items to display in the shopping list. 
// // You'll need some way of filtering the array of items based 
// // on the selectedCategory.

// //grab useState
// //create a variable called selectedCategory 
// //put an onChange on "select" dropdown 
// //create an event handler 
// //create a variable called filteredList and filter items
// //use new array to update items map


// import React, {useState} from "react";
// import Item from "./Item";

// function ShoppingList({ items }) {

//   const [selectedCategory, setSelectedCategory] = useState("All")

//   const handleFilter = (e) => {
//     setSelectedCategory(e.target.value)
//   }
//   console.log(selectedCategory)

//   let filteredList = items.filter(item => {
//     if (selectedCategory === "All") return true
//     return (item.category === selectedCategory)
//   })
// console.log(filteredList)

//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select name="filter" onChange={handleFilter}>
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
//       <ul className="Items">
//         {filteredList.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;


















































// // //REVIEW ATTEMPT 8/11 2 (looking at answer (a little less))

// //hook useState, create selectedCategory state variable, onChange, event handler, filter

// import React, {useState} from "react";
// import Item from "./Item";

// function ShoppingList({ items }) {
//   const [selectedCategory, setSelectedCategory] = useState("All")

//   const handleSelectedCategory = (e) => {
//     setSelectedCategory(e.target.value)
//   }

//   let filteredItems = items.filter(item => {
//     if (selectedCategory === "All") return true

//     return (item.category === selectedCategory)
//   })
//   console.log(filteredItems)

//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select name="filter" onChange={handleSelectedCategory}>
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
//       <ul className="Items">
//         {filteredItems.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;



// //REVIEW ATTEMPT 8/11 1 (looking at answer) - complete
// import React, {useState} from "react";
// import Item from "./Item";

// function ShoppingList({ items }) {

//   const [selectedCategory, setSelectedCategory] = useState("All")

//   const handleSelectedCategory = (e) => {
//     setSelectedCategory(e.target.value)
//   }
//   console.log(selectedCategory)

//   let filteredItems = items.filter(item => {
//     if (selectedCategory === "All") return true

//     return (item.category === selectedCategory)
//   })
//     console.log(filteredItems)

//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select name="filter" onChange={handleSelectedCategory}>
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
//       <ul className="Items">
//         {filteredItems.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;







//COMPLETED SOLUTION 
// import React, { useState } from "react";
// import Item from "./Item";

// function ShoppingList({ items }) {
//   const [selectedCategory, setSelectedCategory] = useState("All")

//   const handleSelectedCategory = (e) => {
//     setSelectedCategory(e.target.value)
//   }
//   let filteredItems = items.filter(item => {
//     if (selectedCategory === "All") return true 

//     return (item.category === selectedCategory)
//   })
//   console.log(filteredItems)

//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select name="filter" onChange={handleSelectedCategory}>
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
//       <ul className="Items">
//         {filteredItems.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;
