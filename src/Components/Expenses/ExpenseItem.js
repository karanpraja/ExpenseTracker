import React, {useState} from "react"
// import styled from "styled-components"
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
function ExpenseItem(props){
  // const [title,setTitle]=useState(props.expense.title)
  // console.log("ReUpdated!!")

  // const titleChangeHandler=()=>{
  //   setTitle("Updated")
  //   console.log("Updated!!")
  // }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date}/>
            <div className='expense-item__description'>
            <h2>{props.expense.title}</h2>
            <div className='expense-item__price'>${props.expense.amount}</div>
            {/* <button onClick={titleChangeHandler}>Click</button> */}
            </div>
        </Card>)
}
export default ExpenseItem;