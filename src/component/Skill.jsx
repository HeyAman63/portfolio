import React from 'react'

const Skill = () => {
  return (
    <div className='relative md:w-[80%] left-2 md:left-[20%] bg-blue-50 mt-10 mr-5 md:mt-20 pb-60 '>
        <h2 className="md:mt-15 mt-5 ml-3 text-2xl font-bold tracking-widest border-b-3 border-blue-300 mb-10 inline-block md:ml-3">
            Skills
        </h2>
        <div className='md:flex  md:gap-4 w-full'>
            <div className='flex flex-col bg-blue-50 gap-8 p-3 md:w-[50%] md:h-10'>
                <div>
                    <div className='flex justify-between'>
                        <span>HTML</span>
                        <span className='text-sm'>90%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-400'><div className='h-2 w-[90%] bg-blue-400'></div></div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <span>CSS</span>
                        <span className='text-sm'>60%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-400'><div className='h-2 w-[60%] bg-blue-400'></div></div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <span>JavaScript</span>
                        <span className='text-sm'>65%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-400'><div className='h-2 w-[66%] bg-blue-400'></div></div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <span>React</span>
                        <span className='text-sm'>75%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-400'><div className='h-2 w-[75%] bg-blue-400'></div></div>
                </div>
            </div>
            <div className='flex flex-col gap-8 p-3 md:w-[50%] h-10'>
                <div>
                    <div className='flex justify-between'>
                        <span>Mongodb</span>
                        <span className='text-sm'>40%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-400'><div className='h-2 w-[40%] bg-blue-400'></div></div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <span>Express</span>
                        <span className='text-sm'>60%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-400'><div className='h-2 w-[60%] bg-blue-400'></div></div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <span>Node</span>
                        <span className='text-sm'>45%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-400'><div className='h-2 w-[45%] bg-blue-400'></div></div>
                </div>
                <div className=''>
                    <div className='flex justify-between'>
                        <span>JWT</span>
                        <span className='text-sm'>55%</span>
                    </div>
                    <div className='h-2 w-full bg-gray-400'><div className='h-2 w-[55%] bg-blue-400'></div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill