import React from 'react';


class ChangeRole extends React.Component {


    render(){
        const users = this.props.users.map((item, index) => {
            return(
                <option key = {index} data-key = {index}>{item.name}</option>
            )
        });
        const roles = this.props.roles.map((item, index) => {
            return(
                <option key = {index}>{item}</option>
            )
        });
        let changing = (this.props.show)?
            (
                <div>
                    <h3>Select user</h3>
                <select className = 'form-control col-sm-2' onChange = {this.props.changeUserForNewRole.bind(null)}>
                    {users}
                </select>
                <h3>Select role</h3>
                <select className = 'form-control col-sm-2' onChange = {this.props.changeNewRoleForUser.bind(null)}>
                    {roles}
                </select>
                <br/>
                <button className="btn btn-primary" onClick = {this.props.saveChanges.bind(null)}>Save</button>
            </div>) : '';

        return(
            <div>
                <button className="btn btn-primary" onClick = {this.props.showChanging.bind(null)}>Change Roles</button>
                {changing}
            </div>
        )
    }
}

export default ChangeRole
