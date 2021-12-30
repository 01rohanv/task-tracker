import React, { useState } from "react";

const AddForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add new task");
      return;
    }
    onAdd({ text });
    setText("");
  };

  return (
    <form onSubmit={onSubmit} className="form-control">
      <label htmlFor="">Tasks</label>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" className="btn btn-block" />
    </form>
  );
};

export default AddForm;
