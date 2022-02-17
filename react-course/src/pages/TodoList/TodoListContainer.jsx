import React from "react";
import styles from "./TodoListContainer.module.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const TodoListContainer = () => {
    const a = "hello";
    const b = "World";

    const sayHello = (value) => {
        alert(value);
    }
    
  return (
    <div className={styles.container}>
      <LeftSide say={sayHello} data={a}/>
      <RightSide say={sayHello} data={b}/>
    </div>
  );
};

export default TodoListContainer;
