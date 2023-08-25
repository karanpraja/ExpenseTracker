import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css"
// import ExpenseFilter from "../Expenses/ExpenseFilter";
function NewExpenses(props){
    const [newExpense,setNewExpense]=useState(false)
    const furtherDataTransferHandler=(enteredExpenseData)=>{
const newExpenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
}
props.transferDataToApp(newExpenseData);

};
const onNewExpenseExpenseHandler=()=>{
setNewExpense(false)
}

    return(
        <div className='new-expense'>
{!newExpense&&(<button onClick={()=>{setNewExpense(true)}}>Add New Expense</button>)}
{newExpense&&(
<ExpenseForm   transferFormData={furtherDataTransferHandler} onCancel={onNewExpenseExpenseHandler}></ExpenseForm >)}
        
        </div>
    )
}
export default NewExpenses;