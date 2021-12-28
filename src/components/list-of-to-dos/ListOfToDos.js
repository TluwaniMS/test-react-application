const ListOfToDos = ({ todos, deleteTodo, markTodoAsCompleted }) => {
  return (
    <div className="">
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>To do: {todo.task}</h1>
          <span onClick={() => deleteTodo(todo.id)}>delete</span>
          <span onClick={() => markTodoAsCompleted(todo.id)}></span>
        </div>
      ))}
    </div>
  );
};

export default ListOfToDos;
