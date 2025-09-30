
function TodoForm() {
  return (
    <div className="mb-4 p-4 shadow-lg">
      <input
        type="text"
        className="form-control form-control-lg shadow-sm mb-4"
        placeholder="Nhập tên công việc"
      />
      <button className="btn btn-primary w-100 py-2">Thêm công việc</button>
    </div>
  );
}

export default TodoForm;
