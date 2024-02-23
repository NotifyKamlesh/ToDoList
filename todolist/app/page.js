"use client"
import React,{useState} from "react"

const ToDoList = () => {
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [mainTasks,setMainTasks] = useState([]);

  const submitHandler =(e)=>{
    e.preventDefault();
    setMainTasks([...mainTasks,{title,description}]);
    setTitle("");
    setDescription("");
    console.log(mainTasks);
  }

  const deleteHandler =(i)=>{
    let copyTasks = [...mainTasks]
    copyTasks.splice(i, 1);
    setMainTasks(copyTasks)

  }

  let renderTask = <h2>No Task Available</h2>
 if(mainTasks.length>0){
  renderTask = mainTasks.map((t,i)=>{
    return(
      <li key={i} className="flex items-center justify-center mb-6">
        <div className="flex justify-between   w-2/3">
        <h2 className="text-xl font-medium">{t.title}</h2>
        <h2 className="text-xl font-medium">{t.description}</h2>
        <button className="bg-red-400 px-4 py-2 text-white rounded-md font-bold"
          onClick={()=>{
            deleteHandler(i)
          }}
        >Delete</button>
      </div>
      </li>
    )

  });
 }

  return (
    <div>
      <h1 className='text-center bg-black text-white font-bold text-2xl'>To Do List</h1>
      <form onSubmit={submitHandler} className="flex justify-center">  
        <input type="text"  placeholder="Enter Your Task" className="rounded-lg border-zinc-500 border-2 m-8 px-4 py-2" 
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)}
        />

        <input type="text"  placeholder="Enter Description Here" className="rounded-lg border-zinc-500 border-2 m-8 px-4 py-2"
          value={description}
          onChange={(e) => 
            setDescription(e.target.value)}
        
        />
        <button className=" p-2 mt-7 h-[50px]  rounded-lg bg-yellow-500 text-white">Add Task</button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
            <ul>{renderTask}</ul>
      </div>
     <a href="https://www.linkedin.com/in/notifykamlesh/" target="_blank" className="color-black flex justify-center mt-14 font-semibold text-2xl ">Develop by Kamlesh</a>
    </div>
    
  )
}

export default ToDoList