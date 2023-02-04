//movie card
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../app/store";
import "./styles.css";

const AddTask = () => {
  const [isOpen, setIsopen] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsopen(false);
    const formdata = new FormData(e.target);
    const newTask = Object.fromEntries(formdata);
    newTask.isDone = false;
    newTask.id = Math.random();

    dispatch(addToDo(newTask));
  };
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger asChild>
        <button
          onClick={() => setIsopen(true)}
          className="Button violet"
          size="large"
        >
          Add Task
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add Task</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Write your ToDo here. Click save when you're done.
          </Dialog.Description>
          <form onSubmit={(e) => handleSubmit(e)}>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="title">
                Title
              </label>
              <input className="Input" name="title" placeholder="title" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="desc">
                Your Task
              </label>
              <input className="Input" name="desc" placeholder="description" />
            </fieldset>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <button className="Button green" type="submit">
                Add
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              onClick={() => setIsopen(false)}
              className="IconButton"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default AddTask;
