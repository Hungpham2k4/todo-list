import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card border-2 rounded-3">
            <div className="card-body p-4">
              <h3 className="text-center mb-4 fw-bold">Quản lý công việc</h3>

              <TodoForm />
              <TodoFilter />
              <TodoList />

              <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-danger px-3 py-2">
                  Xóa công việc hoàn thành
                </button>
                <button className="btn btn-danger px-3 py-2">
                  Xóa tất cả công việc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
