import React from "react";
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentsData = [
    { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 82 },
    { id: 2, name: "Bob", math: 85, physics: 79, chemistry: 88 },
    { id: 3, name: "Charlie", math: 92, physics: 91, chemistry: 89 },
    { id: 4, name: "David", math: 65, physics: 72, chemistry: 68 },
    { id: 5, name: "Ella", math: 88, physics: 84, chemistry: 92 },
    { id: 6, name: "Frank", math: 74, physics: 76, chemistry: 71 },
    { id: 7, name: "Grace", math: 90, physics: 89, chemistry: 94 },
    { id: 8, name: "Hank", math: 68, physics: 64, chemistry: 72 },
    { id: 9, name: "Ivy", math: 81, physics: 82, chemistry: 85 },
    { id: 10, name: "Jack", math: 95, physics: 92, chemistry: 96 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentsData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis />
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="chemistry" stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
