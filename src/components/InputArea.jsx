import React, { useState } from "react";


function InputArea(props) {

  const [inputText, setInputText] = useState(); // <------ estado

  function handleChange(event) {

    const newValue = event.target.value;
    setInputText(newValue) // <----- atualizamos o estado "inputText" atraves de "setInputText"
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={() => {

        if (!inputText) { // <----- Se nao tiver vazio, nao faz nada
          return
        };

        props.onAdd(inputText)
        setInputText('')
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
