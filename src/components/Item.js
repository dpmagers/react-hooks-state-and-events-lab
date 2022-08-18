import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

  const inCartHandler = (e) => {
    setIsInCart(isInCart => !isInCart)
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={inCartHandler}>{isInCart ? "Remove from " : "Add to "}Cart</button>
    </li>
  );
}

export default Item;
















































// //attempt 3

// import React, {useState} from "react";

// function Item({ name, category }) {

//   const [isInCart, setIsInCart] = useState(false)

//   const handleIsInCart = () => {
//     setIsInCart(isInCart => !isInCart)
//   }

//   return (
//     <li className={isInCart ? "in-cart" : ""}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className={isInCart ? "remove" : "add" } 
//       onClick={handleIsInCart}>{isInCart? "Remove" : "Add to Cart"}</button>
//     </li>
//   );
// }

// export default Item;

















































// // //REVIEW ATTEMPT 8/11 2 (looking at answer a little less) = complete

// //need to hook in state, initialize variable, onClick, event handler, change label

// import React, {useState} from "react";

// function Item({ name, category }) {

//   const [isInCart, setIsInCart] = useState(false)

//   const handleIsInCart = () => {
//     setIsInCart(isInCart => !isInCart)
//   }
//   console.log(isInCart)



//   return (
//     <li className={isInCart? "in-cart" : ""}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className={isInCart ? "remove" : "add"} 
//       onClick={handleIsInCart}>{isInCart ? "Remove from" : "Add to"} Cart</button>
//     </li>
//   );
// }

// export default Item;











// //REVIEW ATTEMPT 8/11 (looking at answer) - complete

// import React, {useState} from "react";

// function Item({ name, category }) {

//   const [isInCart, setIsInCart] = useState(false)

//   const handleAddToCart = () => {
//     setIsInCart(isInCart => !isInCart)
//   }
//   console.log(isInCart)

//   return (
//     <li className={isInCart? "in-cart" : ""}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className={isInCart ? "remove" : "add"} onClick={handleAddToCart}>Add to Cart</button>
//     </li>
//   );
// }

// export default Item;



// //COMPLETED SOLUTION 
// import React, {useState} from "react";

// function Item({ name, category }) {
//   const [isAddedToCart, setIsAddedToCart] = useState(false) 
//   const handleAddToCart = () => {
//     setIsAddedToCart(!isAddedToCart)
//     console.log(isAddedToCart)
//   }
//   return (
//     <li className={isAddedToCart ? "in-cart" : ""}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className={isAddedToCart ? "remove" : "add"} 
//       onClick={handleAddToCart}>{isAddedToCart ? "Remove" : "Add"} to Cart</button>
//     </li>
//   );
// }

// export default Item;
