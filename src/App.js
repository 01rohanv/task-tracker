import { useEffect, useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { data } from "./data";
import About from "./components/About";

function App() {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      setTasks(data);
    };
    fetchTask();
  }, []);

  // onAdd
  const onAdd = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
    //   const newTask = { ...task };
    //   setTasks([...tasks, newTask]);
  };

  // onDelete
  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <div className="container">
        <div className="app">
          <h1>Task Tracker</h1>
          <button className="btn" onClick={() => setShow(!show)}>
            Add
          </button>
        </div>
        {show && <AddForm onAdd={onAdd} />}
        {tasks.length > 0 ? (
          <Header tasks={tasks} onDelete={onDelete} />
        ) : (
          "No task to show...."
        )}

        <Routes>
          <Route path="/" exact render={(props) => <></>} />
          <Route path="/about" component={About} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
