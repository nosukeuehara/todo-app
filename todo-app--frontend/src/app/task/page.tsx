import React from "react";

const page = async () => {
  const responsData = await fetch("http://localhost:8080/task");
  const tasks = await responsData.json();
  return (
    <div className="task">
      {tasks.map((task) => {
        return (
          <div className="task" key={task.id}>
            {task.id}
          </div>
        );
      })}
    </div>
  );
};

export default page;
