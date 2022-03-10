import React, {Component} from "react";
import Notifications from "./Notifacations";
import ProjectList from "../projects/ProjectList"
import { connect } from 'react-redux'
import rootReducer from "../../store/reducers/rootReducer";
import projectReducer from "../../store/reducers/projectReducer";
import ProjectDetails from "../projects/ProjectDetails";
class Dashboard extends Component {
    
    render(){
        console.log(this.props)
        const {projects} = this.props
        return (
        <div className="dashboard container">
            <div className="row"> 
                <div className="col s12 m6">
                    
                    <ProjectDetails />  
                </div>     
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
                    
            </div>
            
        </div>
        )
        
    }
}



export default (Dashboard)