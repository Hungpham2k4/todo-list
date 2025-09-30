
function TodoItem({ text, completed }:{text: string, completed: boolean}) {
  return (
    <li className="list-group-item d-flex align-items-center border-0 shadow-sm mb-2 rounded-3">
      <input
        className="form-check-input me-3"
        type="checkbox"
        defaultChecked={completed}
      />
      <span
        className={`flex-grow-1 ${
          completed ? "text-decoration-line-through text-muted" : ""
        }`}
      >
        {text}
      </span>
      <div>
        <button className="btn btn-sm btn-outline-warning me-2">
          <i className="bi bi-pencil"></i>
        </button>
        <button className="btn btn-sm btn-outline-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
