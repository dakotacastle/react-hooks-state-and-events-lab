import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCat] = useState('All')

  function catChange(e){
    setCat(e.target.value)
  }
  const filterItems = items.filter(item => {
    if (selectedCategory === "All"){
      return true
    } else {
      return item.category === selectedCategory
    }
  })
  const cartItems = filterItems.map((item) => (
    <Item key={item.id}
    name={item.name}
    category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={catChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {cartItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
