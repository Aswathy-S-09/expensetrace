import React, { useEffect, useState } from 'react'
import ExpenseForm from './ExpenseForm.jsx'
import History from './History.jsx'
import BalanceContainer from './BalanceContainer.jsx';



import {v4 as uid} from "uuid";
function ExpenseContainer(){
/*  const EXPENSE=[{
    id:uid(),
    title:"Expense 1",
    amount:100,
  },{
    id:uid(),
    title:"Expense 2",
    amount:-200,
  }]*/
const [expense,setExpense]=useState([])
const fetchExpense=async()=>{
  try {
    const response=await fetch('https://expensetracker-cbq0.onrender.com/expense')
    const data=await response.json()
    setExpense(data)
    console.log(data)
  } catch (error) {
    console.error('failed to fetch data',error)
  }
}
useEffect(()=>{ 
  fetchExpense();
},[])
/*const addExpense=(title,amount)=>{
    setExpense([
        ...expense,{
            id: uid(),
            title,
            amount,
        },
    ]);
}*/
const addExpense = async(title,amount)=>{
  try {
    const response=await fetch('https://expensetracker-cbq0.onrender.com/expense',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({title,amount}),
    });
    if(response.ok){
      const newItem=await response.json();
      setExpense((prev)=>[...prev,newItem])
    }else{
      console.log('failed to fetch')
    }
  } catch (error) {
    console.error('failed to add expense ',error)
  }
}
// const deleteExpense=(id)=>{
//   setExpense(expense.filter((exp)=>exp.id!==id))
// }
  const deleteExpense = async (id) => {
    try {
      const response = await fetch(`https://expensetracker-cbq0.onrender.com/expense/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setExpense((prev) => {
          const updated = [...prev];
          const index = updated.findIndex((exp) => exp._id === id);
          if (index !== -1) {
            updated.splice(index, 1);
          }
          return updated;
        });
      } else {
        console.error('Failed to delete expense');
      }
    } catch (error) {
      console.error('Error while deleting expense:', error);
    }
  };
  return (
    <div className='expense-container'>
      <h1 className='h'>Expense Tracker</h1>
      <BalanceContainer expense={expense}/>
      
        <History expense={expense} deleteExpense={deleteExpense}/>
        <ExpenseForm addExpense={addExpense}/>
    </div>
  )
}
export default ExpenseContainer