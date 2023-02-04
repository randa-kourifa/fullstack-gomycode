import React from "react";
import Checkbox from "../Checkbox";
import AlertDialogDemo from "../DeleteTask";
import "./styles.css";
export default function Task({ title, desc, isDone, id }) {
  return (
    <div className="taskcontainer">
      <p>{title}</p>
      <p>{desc}</p>
      <Checkbox isDone={isDone} id={id} />
      <AlertDialogDemo id={id} />
    </div>
  );
}
