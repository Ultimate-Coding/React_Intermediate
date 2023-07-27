import { TasksProvider } from "./TasksContext.js";
import Add from "./components/Add.js";
import List from "./components/List.js";

function App() {
  return (
    <TasksProvider>
      <h1>Sports</h1>
      <Add />
      <List />
    </TasksProvider>
  );
}

export default App;
