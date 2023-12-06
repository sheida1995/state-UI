import { useState } from "react";
import "./StyleT.css";

const StyleT = () => {
  const [textInput, setTextInput] = useState("");
  const [selected , setSelected] = useState (false)

  const changeHandler = (event) => {
    
    setTextInput(event.target.value);

    console.log("sd")
  };
   const submitHandler =(event)=>{
    event.preventDefault();
    setTextInput("");
    console.log(textInput)
   }
  return (
    <>
    <form className={
        selected ? "selected" : ""
    }
    onSubmit={submitHandler}>
    <input
        type="text"
        placeholder="text"
        onChange={changeHandler}
        value={textInput}
      />
      <button style={{color :"red" , margin: "5px" , backgroundColor:"violet" }}   type="submit">click</button>
      <button onClick={() => setSelected((s) => !s)}>change bgc</button>
    </form>
    </>
  );
};

export default StyleT;
