import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Dashboard() {
    const [option, setOption] = useState("Department");
    const [data, setData] = useState([]);

    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const students = [
        { department: "Computer", enrollment: "1", fees: "No", name: "a" },
        { department: "Computer", enrollment: "1", fees: "Yes", name: "a" },
        { department: "EC", enrollment: "1", fees: "No", name: "a" },
        { department: "EC", enrollment: "1", fees: "Yes", name: "a" },
        { department: "EC", enrollment: "1", fees: "No", name: "a" },
        { department: "EC", enrollment: "1", fees: "Yes", name: "a" },
        { department: "EC", enrollment: "1", fees: "No", name: "a" },
        { department: "IT", enrollment: "1", fees: "No", name: "a" },
        { department: "IT", enrollment: "1", fees: "No", name: "a" },
        { department: "IT", enrollment: "1", fees: "Yes", name: "a" },
        { department: "IT", enrollment: "1", fees: "No", name: "a" },
    ];

    function showChart() {
        let dIT = 0;
        let dEC = 0;
        let dCC = 0;
        let fYes = 0;
        let fNo = 0;

        for (let i = 0; i < students.length; i++) {
            if (students[i].department === "EC") dEC += 1;
            if (students[i].department === "Computer") dCC += 1;
            if (students[i].department === "IT") dIT += 1;
            if (students[i].fees === "No") fNo += 1;
            if (students[i].fees === "Yes") fYes += 1;
        }

        if (option === "Department") {
            setData([
                {
                    name: "Computer",
                    value: dCC,
                },
                {
                    name: "EC",
                    value: dEC,
                },
                {
                    name: "IT",
                    value: dIT,
                },
            ]);
            console.log(data);
        } else {
            setData([
                {
                    name: "Yes",
                    value: fYes,
                },
                {
                    name: "No",
                    value: fNo,
                },
            ]);

            console.log(data);
        }
    }

    // const data = [
    //     { name: "Group A", value: 400 },
    //     { name: "Group B", value: 300 },
    //     { name: "Group C", value: 300 },
    //     { name: "Group D", value: 200 },
    //     { name: "Group E", value: 278 },
    //     { name: "Group F", value: 189 },
    // ];

    return (
        <div>
            <div>
                <select onChange={(event) => setOption(event.target.value)}>
                    <option>select</option>
                    <option>Department</option>
                    <option>Fees Status</option>
                </select>
                <button onClick={showChart}>show!</button>
            </div>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    startAngle={360}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                />
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                    />
                ))}
            </PieChart>
        </div>
    );
}

export default Dashboard;
