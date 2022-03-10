import { collection, getDocs, query } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import db from "../../config/fbConfig";
import ProjectDeltailItem from "./ProjectDeltailItem";

export const getCollections = async () =>{
    let data = []
    
    const querySnapshot = await getDocs(collection(db,"test"));
    querySnapshot.forEach((doc) => {
        data.push({...doc.data(), id: doc.id})
    })
  
    return data
  
  }



const ProjectDetails = () => {
    
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        getCollections().then(res=>{
            if(res){
                // console.log(res)
                setProjects(res)
            }
        })
        
    },[])

 
    
    return (
        <div>
              {projects.map((project,index) => (<ProjectDeltailItem data={project} key={index}/>))}
        </div>
    )
}
export default ProjectDetails