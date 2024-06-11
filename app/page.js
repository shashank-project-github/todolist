"use client"
import React, { useState } from 'react'
import "./globals.css";


const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  }


  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <>
          <ul className="bg-white rounded-lg shadow divide-y divide-gray-200 max-w-sm m-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <li key={i} className="px-6 py-4 my-5">
              <div className="flex justify-between">
                <span className="font-semibold text-lg">{t.title}</span>
                {/* <span className="text-gray-500 text-xs">1 day ago</span> */}
              </div>
              <p className="text-gray-700">
              {t.desc}
              </p>
              <button onClick={() => {deleteHandler(i)}}
            className='bg-red-400 text-white rounded-lg py-2 mx-auto my-4 px-4 font-bold'>Delete</button>
            </li>
          </ul>
        </>

      );
    });
  }

  return (

    <>

      <h1 className='bg-gray-900 text-center text-white p-2 text-5xl font-bold'>Todo List</h1>
      <form onSubmit={submitHandler} className='m-20 flex justify-center items-center'>
        <input className='text-1xl border-zinc-800 border-2 m-8 px-6 py-2' type="text" placeholder='Enter task here' value={title} onChange={(e) => {
          settitle(e.target.value)
        }} />
        <input className='text-1xl border-zinc-800 border-2 m-8 px-6 py-2' type="text" placeholder='Enter Description here' value={desc} onChange={(e) => {
          setdesc(e.target.value)
        }} />
        <button className='bg-green-700 text-white rounded-lg p-2'>
          Add Task
        </button>
      </form>


      <hr />

      <div className='p-8 bg-slate-200 my-10 mx-56 rounded-xl'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
