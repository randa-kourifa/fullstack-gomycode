import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task";
import classes from "./styles.module.css";
export default function ListTask() {
  const tasks = useSelector((state) => state.todos);

  return (
    <div className={classes.container}>
      {tasks.map((el) => (
        <Task key={el.id} {...el} />
      ))}
    </div>
  );
}
