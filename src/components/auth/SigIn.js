import React, {Component} from "react";
import Login from "./GoogleLogin";
import "./Sigin.css"



class SignIn extends Component {
    state = {
        email:'',
        password:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return(
            <div className="container">
               <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="blue-text text-darken-3">Sign In</h5>
                    <div className="inpit-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="inpit-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field login">
                        <button className="btn pink lighten-1 z-depth-0 btn-login">Login</button>
                        <Login />
                    </div>
               </form>
              
            </div>
        )
    }
}
export default SignIn