import React from "react";
import styles from "./TodoListContainer.module.css";

const RightSide = ({say, data}) => {
    return (
    <div className={styles.box}
    onClick={()=>say(data)}
    >
        {data}
    </div>
    )
}

export default RightSide;
