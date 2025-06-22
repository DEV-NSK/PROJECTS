import React from 'react'
import "./roadmap.css"
import Data from "/src/data.jsx"

const Roadmap = () => {
  return (
    <div className='w-full p-5 pt-0'>
      <h2 className="w-full text-center text-xl pt-2 pb-4 md:pt-0 md:pb-4">
        Top Career Roles
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 p-2 w-full text-center'>
        {Data.map((role, index) => {
          return (
            <div className='cards'>
              <h1 className='text-center text-orange-600 font-semibold'>{role.name}</h1>
              <p className='text-center text-xs pt-2 pb-2'>{role.description}</p>
              <p className='text-start pb-2 text-sm'>Requires :</p>
              <div className='grid grid-cols-2 items-center text-center gap-3' id='skills'>
                {role.skills_required.map((p) => {
                return(
                  <h3>{p}</h3>
                )
              })}
              </div>
              <div className='pt-5'>
                <a href="" id='knowmore'>know more</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Roadmap
