import React from 'react';
import TodoList from './TodoList.js'

function App() {
  return (
  <>
   <TodoList />
   <input type="text"></input>
   <button>Add todo</button>
   <button>Clear</button>
   <div>0 todo left</div>
  </>
  );
}

export default App;
