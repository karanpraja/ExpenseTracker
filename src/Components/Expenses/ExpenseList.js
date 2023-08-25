import React from "react";
import ExpenseItem from "./ExpenseItem";
function ExpenseList(props){
    
        let expenseContent=<p style={{color:"white"}}>No Epenses Found</p>
        if(props.Items.length>0){
          expenseContent=props.Items.map((items)=>(
            <ExpenseItem
            expense={items}/>//items=props.items
          ))
        }
        return (
            <div>
                {expenseContent}
            </div>
        )
}
export default ExpenseList;