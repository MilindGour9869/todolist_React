import React , {useState} from 'react';
import TodoList from './TodoList.js'

function App() {

  const [todo , setTodo] = useState(['todo 1' , 'todo 2']);





  return (
  <>
   <TodoList  todos = {todo}/>
   
   <input type="text"></input>
   <button>Add todo</button>
   <button>Clear</button>
   <div>0 todo left</div>
  </>
  );
}

export default App;
