import React from "react";

const page = async () => {
  const responsData = await fetch("http://localhost:8080/task/getTask");
  const tasks: TaskArg[] = await responsData.json();
  return (
    <table>
      <thead>
        <tr>
          <th>task</th>
          <th>start</th>
          <th>end</th>
          <th>memo</th>
          <th>ticketID</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id} className="task-table__body">
            <td>{task.taskName}</td>
            <td>{task.start}</td>
            <td>{task.end}</td>
            <td>{task.comments}</td>
            <td>{task.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default page;

export interface TaskArg {
  id: number;
  start: string;
  end: string;
  comments: string;
  taskName: string;
}
