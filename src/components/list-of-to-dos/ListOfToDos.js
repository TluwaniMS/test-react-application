const ListOfToDos = (props) => {
  return (
    <div className="bg-gray-800 m-auto w-4/12 mt-8 p-8px text-white">
      <h1>To do: {props.todo.task}</h1>
    </div>
  );
};

export default ListOfToDos;
