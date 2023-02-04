import React from "react";
import AddTask from "../components/AddTask/Task";
import ListTask from "../components/ListTask";

export default function Home() {
  return (
    <div>
      <h1>My todos</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}
