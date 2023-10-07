import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

function App() {
  const [items,setItems] = useState([])

  const handleAddItems = (newItem) => {
    setItems(prevItems => [...prevItems,newItem])
    }

  const handleDeleteItem = (id) => {
    setItems(prevItems=> prevItems.filter(item=> item.id !== id))
  }

  const handleToggleItem = (id) =>{
    setItems(items=> items.map(item=> item.id === id ? {...item, packed: !item.packed} : item))
  }

  const handleClearList = () =>{
    const confirmed = window.confirm("Are you sure you want to delete the whole list")

  if(confirmed) setItems([])
  }


  return (
    <div className="app">
      <Logo/>
      <Form onAddItems= {handleAddItems}/>
      <PackingList onClearList={handleClearList} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} items={items}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;

