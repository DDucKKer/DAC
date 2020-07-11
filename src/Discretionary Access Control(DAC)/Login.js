import React from 'react';


class Login extends React.Component {


    render(){
        return(
            <div>
                <button onClick = {this.props.logIn} className="btn btn-primary">Login</button>
            </div>
        )
    }
}

export default Login
