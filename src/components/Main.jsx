import Form from "./Form";
import SortBy from "./SortBy";
import TaskList from "./TaskList";

function Main() {
  return (
    <div className="px-4 py-4">
      <Form />
      <SortBy />
      <TaskList />
    </div>
  );
}

export default Main;
