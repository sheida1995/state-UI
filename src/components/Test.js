import {useState} from 'react'

const Test = () => {
  const [name , setName] = useState("");
  const [pass , setPass] = useState ("");
  const [role , setRole] = useState("user");


  const loginHandler =()=>{
    console.log ({name , pass , role})
  }

  const nameHandler = (event) =>{
    setName(event.target.value);
  }
  const passHandler =(event) => {
    setPass(event.target.value);
  }
  const selectHandler = (event) =>{
setRole(event.target.value)
  }
  



  return (
    <>
      <input
      type='text'
      placeholder='name'
      value={name}
      onChange={nameHandler}
      
      />
      <input
      type='password'
      placeholder='pass'
      value={pass}
      onChange={passHandler}
      />
      <select value={role}
      onChange={selectHandler}>
        <option value="ad">Admin</option>
        <option value="us">User</option>
        <option value="wrt">Writer</option>
      </select>


      <button onClick={loginHandler}>click</button>
    </>
  )
}

export default Test
