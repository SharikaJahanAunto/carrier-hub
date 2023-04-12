import React from 'react';
import './Statistics.css'


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
const Statistics = () => {
    const data = [
        {id:1,name: "Assignment 1", mark: 60, avg: 60, amt: 60 },
      { id: 2,name: "Assignment 2", mark: 58, avg: 59.5, amt: 50 },
      { id: 3,name: "Assignment 3", mark: 60, avg: 59.75, amt: 40 },
      { id: 4,name: "Assignment 4", mark: 59, avg: 59.37, amt: 30 },
      { id: 5,name: "Assignment 5", mark: 44, avg: 57.67, amt: 20 },
      { id: 6,name: "Assignment 6", mark: 58, avg: 58.14, amt: 10 },
      { id: 7,name: "Assignment 7", mark: 60, avg: 56.68, amt: 0 },
      { id: 8,name: "Assignment 7", mark: 44, avg: 54.00, amt: 0 },
    ];
    return (
      <div>
         <div className='d-flex justify-content-center mt-5 '>        
                <h1 className='fw-bold '>Assignment Analytics Chart</h1>
           </div>
      
        <div className="mt-5 row d-flex justify-content-center mb-5">
          <div  className="col-sm-12  col-md-6">
            <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis dataKey={"amt"} />
              <CartesianGrid strokeDasharray="6 6" />
              <Tooltip />
              <Legend effectOpacity={0.6} />
              <Line
                type="monotone"
                dataKey="mark"
                stroke="#8884d8"
                activeDot={{ r: 9 }}
              />
              <Line type="monotone" dataKey="avg" stroke="#82ca9d" />
            </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };

export default Statistics;