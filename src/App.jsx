import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Intro from './components/Intro'
import backgroundImage from './components/Download.jpg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';


function App() {
  const [todo, settodo] = useState('')
  const [todos, settodos] = useState([])
  const [showfinished, setshowfinished] = useState(true)
  
  useEffect(() => {
    let temp=localStorage.getItem("items")
    if(temp){
      let todos=JSON.parse(temp)
    settodos(todos)
  }

}, [])

useEffect((params) => {   //better than making it a function
  localStorage.setItem("items",JSON.stringify(todos))
},[todos])

const handleAdd =() => {
  settodos([...todos,{id:uuidv4(),temp:todo,isComplete:false}])
  settodo("")
}

const handleChange=(e) => {
  settodo(e.target.value)
  // savetoLS()
}

const handleEdit=(id) => {
  let tempTodo=todos.filter(i=>i.id==id)
  console.log(tempTodo[0].temp)
  settodo(tempTodo[0].temp)
  const newtodos=todos.filter(i=>i.id!=id)
  settodos(newtodos)
  // savetoLS()
}

const handleDelete=(id) => {
  let newtodos=todos.filter(i=>i.id!=id)
  settodos(newtodos)
  // savetoLS()
}

const handleCheckBox=(id) => {
 let index=todos.findIndex(i=>{return i.id==id})
 const newtodos=[...todos]
 newtodos[index].isComplete=!newtodos[index].isComplete
 settodos(newtodos)
//  savetoLS()
}

const toggleshowfinished=() => {
  setshowfinished(!showfinished)
  // savetoLS()
}

const router=createBrowserRouter([ //helps making multi page apps by connecting them using router functions
  {
    path:"/",
    element:<><Navbar/><Intro/></>
  },
  {
    path:"/tasks",
    element:<>
    <Navbar/>
      <div className="min-h-[80vh] w-[35%] rounded-xl p-5 bg-violet-300 my-5  mx-auto">
      <h1 className="font-bold text-center text-3xl">Hey, this is your Buddy!.</h1>
      <div className="addtodo gap-5 my-5 ">
        <h2 className="font-bold text-2xl">Add a Todo</h2>
        <div className="flex my-5 gap-5">
          <input onChange={handleChange} type="text" value={todo} className="rounded-full w-full p-3 " />
          <button onClick={handleAdd} disabled={todo.length<=3} className="rounded-full bg-violet-700 text-white p-4 py-2">Save</button>
        </div>
      </div>
      <div className="flex">
        <input type='checkbox' checked={showfinished} onChange={toggleshowfinished} className='mx-2'></input>
        <div className='font-serif my-2'>Show finished</div>
      </div>
      <h2 className="font-bold text-2xl">Your Todos</h2>
      {todos.length==0 && <div className='my-4'>No Todos to display</div>}
      {todos.map (item => {
        return( (showfinished || !item.isComplete) &&
        <div className="flex gap-3 justify-between">
          <div className='flex items-center' >
            <input type='checkbox' checked={item.isComplete} onChange={()=>handleCheckBox(item.id)} ></input>
            <div className={item.isComplete==true?'line-through mx-4':'mx-4'}>{item.temp}</div>
          </div>
          <div className='flex gap-5 items-center'>
            <button onClick={(e)=>handleEdit(item.id)} className='bg-orange-300 p-2 rounded-lg my-2'><FaEdit /></button>
            <button onClick={(e)=>handleDelete(item.id)} className='bg-orange-300 p-2 rounded-lg my-2'><MdDelete /></button>
          </div>
        </div>
        )
      })}
      </div>

    </>
  },
])

  return (
    <>
      <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
