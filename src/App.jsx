import { useState } from "react";
import Heading from "./Header";
import InputField from "./Input";
import TodoItems from "./ToDoItems";
import Welcome from "./WelcomeMsg";
import Item from "./Items";


const App = ()=>{
  
  const [Items, setToDoItems] = useState([]);

  const onNewItem = (iname, idate)=>{
    const newTodoItems = [...Items, {name: iname, date: idate},];
    setToDoItems(newTodoItems);
  };

  const handleDelete = (nameOfItem)=>{
    const newTodoItems = Items.filter(item=> item.name!== nameOfItem);
    setToDoItems(newTodoItems);
  }

  return <>
    <Heading/>
    <InputField handleAdd={onNewItem}/>
    {Items.length===0 && <Welcome/>}
    <TodoItems Items={Items} handleDelete={handleDelete} />
  </>
}

export default App;
