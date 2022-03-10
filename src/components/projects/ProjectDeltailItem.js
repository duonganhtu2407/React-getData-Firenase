




import React from 'react'

export default function ProjectDeltailItem({data}) {
    console.log(data)
  return (
        <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title"> {data.title}</span>
                <p>{data.content}</p>
            </div>
            <div className="card-action gret lighten-4 blue-text">
                <div>{data.authLastName}</div>
                <div>{data.authFirstName}</div>         
            </div>
            
        </div>
        </div>
    
  )
}
