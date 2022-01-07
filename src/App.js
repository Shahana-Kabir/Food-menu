import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))] 
console.log(allCategories);

function App() {
  const [selectedItems, setSeletedItems] = useState(items);
  const[categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setSeletedItems(items);
      return;
    }

    const newItems = items.filter((item)=> item.category === category);
    setSeletedItems(newItems);
  }

  console.log(selectedItems);
  return (<main>
      <div className = 'title'>
        <h2>Our menu</h2>
        <div className = 'underline'></div>
                
                <Categories categories = {categories} filterItems = {filterItems}/>
                <Menu selectedItems = {selectedItems}/>
        </div>
            
          </main>);
}

export default App;
