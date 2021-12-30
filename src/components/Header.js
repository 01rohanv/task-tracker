import React from "react";
import CloseIcon from "@material-ui/icons/Close";

const Header = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <div className="task">
            <div className="header">
              <h3 key={task.id}>{task.text}</h3>
              <CloseIcon onClick={() => onDelete(task.id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
