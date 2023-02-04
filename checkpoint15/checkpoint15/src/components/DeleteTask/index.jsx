import * as AlertDialog from "@radix-ui/react-alert-dialog";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../app/store";
import "./styles.css";

const AlertDialogDemo = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="Button violet">Delete task</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            This action cannot be undone. This will permanently delete your task
            and remove your data from our servers.
          </AlertDialog.Description>
          <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
            <AlertDialog.Cancel asChild>
              <button className="Button mauve">Cancel</button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                className="Button red"
                onClick={() => dispatch(deleteTodo(id))}
              >
                Yes, delete task
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
export default AlertDialogDemo;
