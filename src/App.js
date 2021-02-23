import {useState} from 'react'
import TodoItem from './components/todoItem/TodoItem'
function App() {
  const [todoList,setTodoList] = useState([])

  function addTodo() {
    const value = document.getElementById('todoInp').value
    const tempTodo = {
      todo : value,
      id : Math.floor(Math.random()*10000)
    }
    const tempList = [...todoList]
    tempList.push(tempTodo)


    setTodoList(tempList)
  }
  return (
    
    <div >
      <input type="input" id="todoInp"  />
      <button  onClick={addTodo}>Add</button>
      <div>
        {todoList.map(val => <TodoItem todoData={val} />)}
        
      </div>

    </div>
  );
}

export default App;
