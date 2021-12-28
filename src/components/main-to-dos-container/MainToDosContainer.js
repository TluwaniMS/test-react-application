import { useState } from "react";

const MainToDosContainer = (props) => {
  const [todos, modifyToDos] = useState([
    { task: "", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" },
    { task: "", dateToBeCompleted: "", id: "", dateCompleted: "", status: "" }
  ]);
  
  return <div></div>;
};

export default MainToDosContainer;
