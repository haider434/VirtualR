import React from 'react'
import workFlow from '../assets/code.jpg'
import { checklistItems } from '../constants'
import { BiCheckCircle } from 'react-icons/bi'
const WorkFlow = () => {
  return (
    <div className="mt-[10vw]">
        <h2 className='text-6xl font-bold sm:text-5xl text-center '>Accelerate your <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'> Coding Flow</span></h2>
        <div className='mt-10 flex-wrap flex '>
            <div className="justify-center lg:w-1/2 p-4 w-full">
                <img src={workFlow} width={600} height={130} alt="" />
            </div>
            <div className="  lg:mt-[10vw]  w-[80vw]  lg:w-1/2 gap-3  justify-center items-center   ">
            {checklistItems.map((item,index)=>(
                <div className="flex  gap-2 justify-center mb-12">
                    <div className="text-green-500 justify-center items-center ">
                        <BiCheckCircle size={35} />
                    </div>
                    <div className="justify-center items-center">
                        <h1>{item.title} </h1>
                        <p className='text-gray-400 text-sm'> {item.description} </p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default WorkFlow