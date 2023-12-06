import { useState } from "react";

const Test = () => {
  // const [name, setName] = useState("");
  // const [pass, setPass] = useState("");
  // const [role, setRole] = useState("user");
  // const [gender , setGender] = useState("male");
  // const [rules , setRules] = useState(false)

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "user",
    gender: "male",
    rules: false,
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    if (name === "rules") {
      setForm((form) => ({ ...form, [name]: event.target.checked }));
    } else {
      setForm((form) => ({ ...form, [name]: event.target.value }));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  // const nameHandler = (event) => {
  //   setName(event.target.value);
  // };
  // const passHandler = (event) => {
  //   setPass(event.target.value);
  // };
  // const selectHandler = (event) => {
  //   setRole(event.target.value);
  // };
  // const genderHandler = (event) => {
  //   setGender(event.target.value)
  // };
  // const rulesHandler =() =>{
  //   setRules(rules => !rules)
  // }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={form.password}
          onChange={changeHandler}
        />
        <select value={form.role} name="role" onChange={changeHandler}>
          <option value="ad">Admin</option>
          <option value="us">User</option>
          <option value="wrt">Writer</option>
        </select>
        <div>
          <label htmlFor="male">male</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={changeHandler}
            checked={form.gender === "male"}
          />
          <label htmlFor="female">female</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={changeHandler}
            checked={form.gender === "female"}
          />
          <label htmlFor="other">other</label>
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            onChange={changeHandler}
            checked={form.gender === "other"}
          />
        </div>
        <input
          type="checkbox"
          name="rules"
          checked={form.rules}
          onChange={changeHandler}
        />

        <button type="submit">login</button>

        <p>result: {JSON.stringify(form)}</p>
      </form>
    </>
  );
};

export default Test;
