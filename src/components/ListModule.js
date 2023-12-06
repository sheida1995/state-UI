import React, { useState } from 'react';
import styles from "./ListModule.module.css";

const ListModule = () => {
  const [selected , setSelected] = useState(true);

  const clickHandler = () =>{
    
  }

  const courses = [
    { id: 1, name: "sheida", description: "sh" },
    { id: 2, name: "jac", description: "jj" },
    { id: 3, name: "jacob", description: "jay" },
    { id: 4, name: "kayt", description: "k" },
  ];

  return (
<>

<div className={selected ? styles.container : ""}>
      <h1>list : </h1>
      <ul>
      {
    courses.map((course)=>(
        <li key={course.id}>
            <p>Name: {course.name}</p>
              <p>Description: {course.description}</p>
        </li>
    ))
      }
      </ul>
      <button onClick={() => setSelected((s) => !s)}>click</button>
    </div>



</>
  );
};

export default ListModule;
