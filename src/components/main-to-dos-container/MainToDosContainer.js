import { useState } from "react";
import ListOfToDos from "../list-of-to-dos/ListOfToDos";

const MainToDosContainer = (props) => {
  const [todos, modifyToDos] = useState([
    { task: "Walk The Dog", dateToBeCompleted: "", id: 1, dateCompleted: "", status: "" },
    { task: "Read A Book", dateToBeCompleted: "", id: 2, dateCompleted: "", status: "" },
    { task: "Practice Coding", dateToBeCompleted: "", id: 3, dateCompleted: "", status: "" },
    { task: "Visit An Orphanage", dateToBeCompleted: "", id: 4, dateCompleted: "", status: "" },
    { task: "Wash The Car", dateToBeCompleted: "", id: 5, dateCompleted: "", status: "" },
    { task: "Go Out For Drinks", dateToBeCompleted: "", id: 6, dateCompleted: "", status: "" },
    { task: "Read The Bible", dateToBeCompleted: "", id: 7, dateCompleted: "", status: "" },
    { task: "Listen To Music", dateToBeCompleted: "", id: 8, dateCompleted: "", status: "" },
    { task: "Go For A Jog", dateToBeCompleted: "", id: 9, dateCompleted: "", status: "" }
  ]);

  const markTodoAsCompleted = (id) => {
    console.log(id);
  };

  const deleteTodo = (id) => {
    console.log(id);
  };

  return (
    <div className="">
      {todos.map((todo) => (
        <ListOfToDos todo={todo} deleteTodo={deleteTodo} markTodoAsCompleted={markTodoAsCompleted} />
      ))}
    </div>
  );
};

export default MainToDosContainer;
