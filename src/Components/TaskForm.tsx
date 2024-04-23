import React, { useState } from "react";

const TaskForm = () => {
    const [task, setTask] = useState("")
    const [rating, setRating] = useState("5")
  return (
    <div className=" pb-10   left-0 flex  right-0  top-28 dropdown ">
      <div className=" scrollbar-hide  max-h-[95vh]  my-auto  border-2  text-black  font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto  w-full px-8  py-8 rounded-xl">
        <h3 className=" text-lg ">Add New Task</h3>
        <div className="mt-8 flex flex-col space-y-1">
          <label className="  text-sm  ">
            Task
          </label>
          <input
            id="task-name-input"
            type="text"
            className=" bg-transparent  px-4 py-2 outline-none focus:border-0 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-1  ring-0  "
            placeholder=" e.g Take coffee break"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="mt-8 flex flex-col space-y-3">
          <label className="  text-sm">
            Current Status
          </label>
          <select className=" select-status flex-grow px-4 py-2 rounded-md text-sm bg-transparent focus:border-0  border-[1px] border-gray-300 focus:outline-[#635fc7] outline-none">
            <option>Draft</option>
            <option>Unsolved</option>
            <option>under precess</option>
            <option>Solved</option>
          </select>

          <label className=" text-sm">
            Severity
          </label>
          <select className=" select-status flex-grow px-4 py-2 rounded-md text-sm bg-transparent focus:border-0  border-[1px] border-gray-300 focus:outline-[#635fc7] outline-none">
            <option>Criticle</option>
            <option>Hard</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <label className="  text-sm">
            Type Of Task
          </label>
          <select className=" select-status flex-grow px-4 py-2 rounded-md text-sm bg-transparent focus:border-0  border-[1px] border-gray-300 focus:outline-[#635fc7] outline-none">
            <option>Server</option>
            <option>Hardware</option>
            <option>Front-end</option>
            <option>Back-end</option>
          </select>

          <label className="block  text-sm">
            Rating
          </label>
        <div className="flex items-center">
          <input
            id="task-rating-input"
            type="range"
            className="w-full bg-transparent  px-4 py-2 outline-none focus:border-0 rounded-md text-s "
            placeholder="rating between 1 - 10"
            min={1}
            max={10}
            step='.25'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <input type="text" name="rating" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} className="w-[20%] outline-none border-2 p-1 ml-2 text-center flex justify-center"/>
        </div>
         
          <button className=" w-full items-center text-white bg-[#635fc7] py-2 rounded-full ">
            Create task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;

{
  /* // <div className="flex  container flex-col items-center justify-center h-screen dark absolute top-0 ">
    //   <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
    //     <h2 className="text-2xl font-bold text-gray-200 mb-4">
    //       Enter Task
    //     </h2>

    //     <form className="flex flex-col">
    //       <input
    //         placeholder="Task Title"
    //         className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
    //         type="text"
    //       />
    //       <input
    //         placeholder="Email"
    //         className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
    //         type="email"
    //       />
    //       <input
    //         placeholder="Phone Number"
    //         className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
    //         type="text"
    //       />
    //       <input
    //         placeholder="LinkedIn Profile URL"
    //         className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
    //         type="text"
    //       />
    //       <textarea
    //         placeholder="Cover Letter"
    //         className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
    //         name="cover_letter"
    //       ></textarea>

    //       <button
    //         className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
    //         type="submit"
    //       >
    //         Apply
    //       </button>
    //     </form>
    //   </div>
    // </div> */
}
