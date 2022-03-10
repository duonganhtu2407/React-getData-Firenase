import React, { Component } from 'react'
import {GoogleLogin, GoogleLogout} from "react-google-login"


export class Login extends Component {
    state = {
        isSignedIn : false
    }
    responseGoogle = (response) => {
        console.log(response)

        if(response.profileObj) {
            this.setState({isSignedIn: true})
        }else {
            this.setState({isSignedIn: false})
        }
    }
    logout = () => {
        this.setState({isSignedIn: false})
    }
    render() {
        return (
            <div className='ui segment container'>
                   { !this.state.isSignedIn && ( <GoogleLogin 
                    clientId = "187922719088-gnf2p8najo72vosoc200oaqapiht377r.apps.googleusercontent.com"
                    buttonText = "Login with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    >
                    </GoogleLogin>)}
                    {this.state.isSignedIn && (<GoogleLogout 
                     clientId = "187922719088-gnf2p8najo72vosoc200oaqapiht377r.apps.googleusercontent.com"
                     buttonText = "Logout"
                     onLogoutSuccess={this.logout}  
                    >    
                    </GoogleLogout>)}
              
            </div>
          )
    }
  
}

export default Login
