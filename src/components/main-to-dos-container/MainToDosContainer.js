import { useState } from "react";
import ListOfToDos from "../list-of-to-dos/ListOfToDos";

const MainToDosContainer = (props) => {
  const [todos, modifyToDos] = useState([
    { task: "Walk The Dog", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "Read A Book", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "Practice Coding", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "Visit An Orphanage", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "Wash The Car", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "Go Out For Drinks", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "Read The Bible", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "Listen To Music", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "Go For A Jog", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" }
  ]);

  return (
    <div>
      {todos.map((todo) => (
        <ListOfToDos todo={todo} />
      ))}
    </div>
  );
};

export default MainToDosContainer;
