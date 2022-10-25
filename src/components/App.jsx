import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState([]);  // <----- será um Array


  // Adiciona um novo elemento na lista

  function addItem(inputText,) {
  
    setItems( (prevItems) => {
      return [...prevItems, inputText] // <----- Copia todos os items ja existentes e entao adiociona o novo item
    } )
 
  }

  // Remove um elemento da Lista
  
  function deleteItem(id) {
    if (window.confirm("Tem certeza que quer excluir esse item?")) {
      setItems( (prevItems) => {
        return prevItems.filter(
          (item, index) => {
            return index !== id
          }
        )
      } )
    }
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     
      <InputArea onAdd={addItem} /> 

      <div>
        <ul>
          {
            items.map( (todoItem, index) => <ToDoItem  // <----- Percorremos o array de todos
            key={index} 
            id={index} 
            text={todoItem} 
            onChecked={deleteItem} /> )
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
