import React,{useState} from "react";
import Expenses from "./Components/Expenses/Expenses"
import NewExpenses from "./Components/NewExpenses/NewExpenses";

function App() {
  const DUMMY_EXPENSES=[
    {id:'e1',
     title:'Book',
    amount:23.4,
  date:new Date(2022,4,4)},
    {id:'e2',
      title:'Mobile',
     amount:18000,
   date:new Date(2019,2,3)},
    {id:'e3',
      title:'Pen',
     amount:5,
   date:new Date(2020,7,11)},
    {id:'e4',
      title:'Cable',
     amount:400,
   date:new Date(2020,10,10)}
  ]
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES)
  // const [NewExpense,setNewExpense]=useState(false)

  const addNewExpenseData=(transferedData)=>{
    setExpenses((prevExpenses)=>{
      return [transferedData,...prevExpenses]
    })
  }
  // const onCancelExpenseHandler=()=>{
  //   setNewExpense(false)
  // }
  return (<div>
    {/* {NewExpense?(
      
    ):(
      <button onClick={()=>(setNewExpense(true))}>
Add New Expense Item
      </button>
    )} */}
    <NewExpenses  transferDataToApp={addNewExpenseData} ></NewExpenses>

          
          <Expenses items={expenses}/>

          </div>);

}

export default App;


