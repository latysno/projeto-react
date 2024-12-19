import React from "react";
import { Chart } from "react-google-charts";
import "./graphDashboard.css"

function GraphDashboard(){
    const data = [
      ["Element", "Vacinas Por Mês: ", { role: "style" }],
      ["janeiro", 8.94, "#b87333"], // RGB value
      ["fevereiro", 10.49, "silver"], // English color name
      ["março", 19.3, "gold"],
      ["abril", 21.45, "color: #e5e4e2"], // CSS-style declaration
    ];
    
  return (
    
      <Chart chartType="ColumnChart" width="500px" height="50%" data={data} options={{
        backgroundColor:'#fff',
        title: 'BarGraph'
      }} />
    
  );
}

export default GraphDashboard
