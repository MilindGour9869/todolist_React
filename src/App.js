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

  function handleTodo(){

  const name = txt.current.value;
  
  setId(n => {

    return  ++n;
  })
  setTodo(arr => {
    return [ ...arr , {id:id , name : name , done:false}]
  });
  txt.current.value = null;


 

    

 
   }





  return (
  <>
   <TodoList  todos = {todo}/>
   
   <input ref={txt} type="text"></input>
   
   <button onClick={handleTodo}>Add todo</button>
   <button>Clear</button>
   <div>0 todo left</div>
  </>
  );
}

export default App;
