import React from 'react';
import ChangeRole from './ChangeRole.js'


class CountryList extends React.Component {


    render(){
        const list = this.props.countries.map((item, index) => {
            let button = (this.props.change === 'admin' || this.props.change === 'manager') ?
                    <td><button className="btn btn-secondary" onClick = {this.props.showInput.bind(null, index)}>{!item.rewrite ? 'Rewrite' : 'Save'}</button></td>
                :
                    <td></td>;
            let input = (!item.rewrite) ? item.name : <input className = 'col-md-3' value = {item.name} onChange = {this.props.rewriteText.bind(null, index)}/>


            let rows = <tr key = {index}>
                            <th scope="row">{index + 1}</th>
                            <td>{input}</td>
                            <td>{item.type}</td>
                            {button}
                        </tr>;

            if(this.props.change === 'worker'){
                if(item.type === 'not secret'){
                    return rows
                }
            }else if(this.props.change === 'manager'){
                if(item.type === 'not secret' || item.type === 'secret'){
                    return rows
                }
            }else{
                return rows
                
            }
        });
        return(
            <div>
                <table className ="table  table-bordered">
                    <tbody>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" >Name</th>
                            <th scope="col" >Type</th>
                            {(this.props.change === 'admin' || this.props.change === 'manager') ? <th scope="col">Add</th> : <td></td>}
                        </tr>
                        {list}
                    </tbody>
                </table>

                {(this.props.change === 'admin') ?
                    <ChangeRole
                        users = {this.props.users}
                        roles = {this.props.roles}
                        show = {this.props.show}
                        showChanging = {this.props.showChanging.bind(this)}
                        changeUserForNewRole = {this.props.changeUserForNewRole.bind(this)}
                        changeNewRoleForUser = {this.props.changeNewRoleForUser.bind(this)}
                        saveChanges = {this.props.saveChanges.bind(this)}/>
                    : ''
                }

            </div>
        )
    }
}

export default CountryList
