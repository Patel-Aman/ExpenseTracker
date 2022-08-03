import { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Pen',
    amount: 10,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Pizza', amount: 200, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Notebooks',
    amount: 350,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Book',
    amount: 300,
    date: new Date(2021, 5, 12),
  },
]

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense
        id={'e' + (expenses.length + 1)}
        onAddExpense={addExpenseHandler}
      />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
