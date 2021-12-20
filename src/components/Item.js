import React, {useState} from "react";

function Item({ name, category }) {
  const [addCart, setCart]=useState(true)
  
function handleCart(){
  setCart(!addCart)
}
  return (
    <li className={!addCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{addCart ? "Add to" : "Remove from"}Add to Cart</button>
    </li>
  );
}

export default Item;
