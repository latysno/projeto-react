import React from "react";
import { Chart } from "react-google-charts";
import "./graphDashboard.css"


  function GraphDashboardSecond(){
    const teste = [
        ["Element", "Porcentagem Vacina: ", { role: "style" }],
        ["masculino", 60, "#b87333"], // RGB value
        ["feminino", 40, "silver"], // English color name
      ];
    
  return (
      <Chart chartType="ColumnChart" width="500px" height="50%" data={teste} options={{
        backgroundColor:'#fff',
        title: 'BarGraph'
      }} />
     
  );
}

export default GraphDashboardSecond