import React from 'react'
import Netflix from '../assets/images/netflix.png'
import NukeMusix from '../assets/images/nukemusix.png'

const Work = () => {
    return (
        <div name="work" className='w-full sm:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                    <p className='py-6'>// Check out some of my recent work.</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 gap-4'>

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Netflix})` }} className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 p-4'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Netflix clone using React Js and Firebase.
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://netflix-clone-aayan-99.vercel.app/" target='_blank' rel='noreferrer'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold tect-lg'>Demo</button></a>
                                <a href="https://github.com/aayan-99/Netflix-Clone" target='_blank' rel='noreferrer'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold tect-lg'>Code</button></a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${NukeMusix})` }} className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 p-4'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                ReactJs Music Player Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://nukemusix.vercel.app/" target='_blank' rel='noreferrer'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold tect-lg'>Demo</button></a>
                                <a href="https://github.com/aayan-99/nukemusix" target='_blank' rel='noreferrer'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold tect-lg'>Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work