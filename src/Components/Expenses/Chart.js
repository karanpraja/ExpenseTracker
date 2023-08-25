import React from "react";
// import ExpenseChart from "./ExpenseChart";
import ChartBar from "./ChartBar";
import "./Chart.css"
const Chart=(props)=>{
    const dataPointValues=props.datapoints.map((xdataPoint)=>xdataPoint.value)
    const MaximumValue=Math.max(...dataPointValues)

return (<div className="chart">
{props.datapoints.map((datapoint)=>(
<ChartBar 
value={datapoint.value}
label={datapoint.label}
maxValue={MaximumValue}
id={datapoint.label}
/>
))}
</div>)
}
export default Chart;