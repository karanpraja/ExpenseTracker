import React from "react";
import "./ExpenseFilter.css"
function ExpenseFilter(props){
    const selectChangeHandler=(event)=>{
props.filteredData(event.target.value)
console.log(event.target.value)//sometimes we should use correct variable
    }
    return(
<div className="expenses-filter">
<div className="expenses-filter__control">
<label>Select year</label>
<select value={props.selected} onChange={selectChangeHandler}  >
    <option value='2023'>2023</option>
    <option value='2022'>2022</option>
    <option value='2021'>2021</option>
    <option vlaue='2020'>2020</option>
    <option value='2019'>2019</option>
</select>
</div>
</div>
    )
}
export default ExpenseFilter;