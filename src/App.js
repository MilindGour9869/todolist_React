import React , {useState , useRef , useEffect} from 'react';
import TodoList from './TodoList.js'


function App() {

  const [todo , setTodo] = useState([]);
  const [id , setId] = useState(0);
  console.log(typeof useState());
  const key = 'storage';





 useEffect(()=>{
   const strg=JSON.parse(localStorage.getItem(key));
   if(strg)
    {setTodo(strg);}
 } , []);


  useEffect(()=>{
    localStorage.setItem(key , JSON.stringify(todo))

  } , [todo]);

 
  


  
  const txt = useRef();

  function checked(id)
  {
    const newtodo=[...todo];
    const todoo = newtodo.find(todo => todo.id===id);
    console.log(todoo)
    todoo.done=!todoo.done;
    setTodo(newtodo);


  }

  function handleTodo(){

  const name = txt.current.value;
  
  setId(n => {

    return  ++n;
  });


  setTodo(arr => {
    return [ ...arr , {id:id , name : name , done:false}]
  });
  txt.current.value = null;
}

function Clear()
{
  let newtodo = [...todo];
  newtodo=[];
  setTodo(newtodo);
}





  return (
  <>
   <TodoList  todos = {todo}  checked = {checked}/>
   
   <input ref={txt} type="text"></input>
   
   <button onClick={handleTodo}>Add todo</button>
   <button onClick={Clear}>Clear</button>
   <div>0 todo left</div>
  </>
  );
}

export default App;
