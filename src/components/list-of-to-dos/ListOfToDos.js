const ListOfToDos = (props) => {
  return (
    <div>
      <h1>To do: {props.todo.task}</h1>
    </div>
  );
};

export default ListOfToDos;
