
function TodoFilter() {
  return (
    <div className="d-flex justify-content-center mb-4 p-4 shadow-lg">
      <div className="btn-group shadow-sm">
        <button className="btn btn-primary active px-3 m-2">Tất cả</button>
        <button className="btn btn-outline-primary px-3 m-2">Hoàn thành</button>
        <button className="btn btn-outline-primary px-3 m-2">Đang thực hiện</button>
      </div>
    </div>
  );
}

export default TodoFilter;
