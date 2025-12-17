// src/components/LineGraph.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: 2015, NLP: 5, Vision: 8, Multimodal: 0, Audio: 1, Robotics: 1 },
  { year: 2016, NLP: 6, Vision: 10, Multimodal: 0, Audio: 2, Robotics: 1 },
  { year: 2017, NLP: 8, Vision: 12, Multimodal: 1, Audio: 2, Robotics: 1 },
  { year: 2018, NLP: 15, Vision: 15, Multimodal: 2, Audio: 3, Robotics: 2 },
  { year: 2019, NLP: 18, Vision: 16, Multimodal: 4, Audio: 4, Robotics: 2 },
  { year: 2020, NLP: 22, Vision: 18, Multimodal: 6, Audio: 5, Robotics: 2 },
  { year: 2021, NLP: 28, Vision: 20, Multimodal: 10, Audio: 6, Robotics: 3 },
  { year: 2022, NLP: 35, Vision: 25, Multimodal: 20, Audio: 8, Robotics: 4 },
  { year: 2023, NLP: 45, Vision: 30, Multimodal: 35, Audio: 12, Robotics: 5 },
  { year: 2024, NLP: 55, Vision: 35, Multimodal: 50, Audio: 15, Robotics: 6 },
  { year: 2025, NLP: 65, Vision: 40, Multimodal: 70, Audio: 20, Robotics: 7 },
];

const LineGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="NLP" stroke="#a78bfa" />
        <Line type="monotone" dataKey="Vision" stroke="#60a5fa" />
        <Line type="monotone" dataKey="Multimodal" stroke="#f472b6" />
        <Line type="monotone" dataKey="Audio" stroke="#34d399" />
        <Line type="monotone" dataKey="Robotics" stroke="#facc15" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
