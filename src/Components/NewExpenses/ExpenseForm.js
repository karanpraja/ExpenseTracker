import React,{useState}from "react";
import "./ExpenseForm.css"
function ExpenseForm(props){
    const [enteredAmount,setenteredAmount]=useState(" ")
    const [enteredTitle,setenteredTitle]=useState(" ")
    const [enteredDate,setenteredDate]=useState(" ")
    const amountChangeHandler=(event)=>{
setenteredAmount(event.target.value)
console.log(event.target.value)
    }
    const titleChangeHandler=(event)=>{
        setenteredTitle(event.target.value)
console.log(event.target.value)

    }
    const dateChangeHandler=(event)=>{
        setenteredDate(event.target.value)
console.log(event.target.value)

    }
    const submitChangeHandler=(event)=>{
        event.preventDefault()
        const enteredExpenseData={
            title: enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
props.transferFormData(enteredExpenseData);
// props.showExpense();
        setenteredAmount("");
        setenteredDate("");
        setenteredTitle("");
    }


return(
    <form onSubmit={submitChangeHandler} >
    <div className="expense-controls">
        <div className="expense-control">
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler} value={enteredTitle}></input>
        </div>
        <div className="expense-control">
            <label>Amount</label>
            <input value={enteredAmount} onChange={amountChangeHandler} type="number" min='0.01' step='0.01' >
            </input>
        </div>
        <div className="expense-control">
            <label >Date</label>
            <input  value={enteredDate} onChange={dateChangeHandler} type='date' min='01-01-2019' max='12-12-2022'></input>
        </div>
    </div>
    <div className="expense-control__action"> 
        <button type="submit">Submit</button>
    </div>
    <div className="expense-control__action">
    <button onClick={props.onCancel} >Cancel Item</button>
    </div>
    </form>
)
}
export default ExpenseForm;