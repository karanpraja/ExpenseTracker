import React, {useState} from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
// import ExpenseForm from "../NewExpenses/ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props){
  const [filteredYear,setfilteredYear]=useState('2020')

const filterDataHandler=(selectedYear)=>{
setfilteredYear(selectedYear)
console.log(selectedYear)
    }
const filteredExpenses=props.items.filter((expense)=>{
      return (expense.date.getFullYear().toString()===filteredYear)
      })

return (<div><Card className="expenses">
{/* <ExpenseForm></ExpenseForm> */}
<ExpenseChart expenses={filteredExpenses}/>
<ExpenseFilter filteredData={filterDataHandler} selected={filteredYear} ></ExpenseFilter>
<ExpenseList Items={filteredExpenses}/>
{/* <ExpenseItem
expense={props.items[0]}
/>
<ExpenseItem
  expense={props.items[1]}
/>
<ExpenseItem
  expense={props.items[2]}
/>
<ExpenseItem
expense={props.items[3]}
/> */}
</Card>
</div>)
}
export default Expenses;

{/* <ExpenseItem
title={expenses[0].title}
id={expenses[0].id}
amount={expenses[0].amount}
date={expenses[0].date}/> */}