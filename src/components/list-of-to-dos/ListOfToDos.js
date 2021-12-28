const ListOfToDos = ({ todo, deleteTodo, markTodoAsCompleted }) => {
  return (
    <div className="" key={todo.id}>
      <h1>To do: {todo.task}</h1>
      <span onClick={() => deleteTodo(todo.id)}>delete</span>
      <span onClick={() => markTodoAsCompleted(todo.id)}></span>
    </div>
  );
};

export default ListOfToDos;
