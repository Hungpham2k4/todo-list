import TodoItem from "./TodoItem";

function TodoList() {
  const todos = [
    { id: 1, text: "Quét nhà", completed: false },
    { id: 2, text: "Giặt quần áo", completed: true },
    { id: 3, text: "Nấu cơm", completed: false },
  ];

  return (
    <ul className="list-group mb-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
      ))}
    </ul>
  );
}

export default TodoList;
