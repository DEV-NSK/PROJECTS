import React from 'react'
import "./roadmap.css"
import Data from "/src/data.jsx"

const Roadmap = () => {
  return (
    <div>
      <div>
        {Data.map((role, index) => {
          return (
            <div>
              <h1>{role.name}</h1>
              <p>{role.description}</p>
              <h3>skills_required: <span>{role.skills_required}</span></h3>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Roadmap
