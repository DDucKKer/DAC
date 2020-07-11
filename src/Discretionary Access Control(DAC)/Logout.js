import React from 'react';


class Logout extends React.Component {


    render(){
        return(
            <div>
                <button onClick = {this.props.logOut} className="btn btn-primary">Logout</button>
            </div>
        )
    }
}

export default Logout
