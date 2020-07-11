import React from 'react';
import './App.css';
import Login from './Discretionary Access Control(DAC)/Login.js'
import Logout from './Discretionary Access Control(DAC)/Logout.js'
import CountryList from './Discretionary Access Control(DAC)/CountryList.js'


class App extends React.Component {
	constructor() {
		super();

		this.state = {
			roles: ['admin' ,'manager','worker'],

			users: [
				{name: 'Admin', role: 'admin'},
				{name: 'Manager', role: 'manager'},
				{name: 'Boris', role: 'worker'},
				{name: 'Ivan', role: 'worker'},
			],
			countries: [
				{name: 'Ukraine', rewrite: false, type: 'not secret'},
				{name: 'Germany', rewrite: false, type: 'secret'},
				{name: 'Russia', rewrite: false, type: 'top secret'},
				{name: 'China', rewrite: false, type: 'secret'},
				{name: 'USA', rewrite: false, type: 'top secret'},
				{name: 'Italy', rewrite: false, type: 'secret'},
				{name: 'Belarus', rewrite: false, type: 'not secret'},
			],
			login: false,
			change: 'admin',
			changeUser: 0,
			changeNewRole:'admin',
			showChanging: false
		};
	}

	logIn(){
		this.state.login = !this.state.login;
		this.setState({
			login: this.state.login
		});
	}
	logOut(){
		this.state.login = !this.state.login;
		this.setState({
			login: this.state.login
		});
	}

	//Change User
	changeUser(event){
		this.state.change = event.target.value
		this.setState({
			change: this.state.change
		});
	}

	//Rewrite Text
	showInput(index){
		this.state.countries[index].rewrite = !this.state.countries[index].rewrite;
		this.setState({
			countries: this.state.countries
		})
	}

	rewriteText(index, event){
		this.state.countries[index].name = event.target.value;
		this.setState({
			countries: this.state.countries
		})
	}
	showChanging(){
		this.state.showChanging = !this.state.showChanging
		this.setState({
			showChanging: this.state.showChanging
		})
	}
	//Change user and role for users
	changeUserForNewRole(event){
		const selectedIndex = event.target.options.selectedIndex;
		let userId = event.target.options[selectedIndex].getAttribute('data-key');
		this.state.changeUser = userId
		this.setState({
			changeUser: this.state.changeUser
		})
		console.log(this.state.changeUser)
	}
	changeNewRoleForUser(event){
		this.state.changeNewRole = event.target.value;
		this.setState({
			changeNewRole: this.state.changeNewRole
		})
		console.log(this.state.changeNewRole)
	}
	//Saving of all changes
	saveChanges(){
		this.state.users[this.state.changeUser].role = this.state.changeNewRole;
		this.setState({
			users: this.state.users
		})
		alert('All is Okay!!!');
	}
	render() {
		const options = this.state.users.map((item, index) => {
			return(
				<option key = {index} value = {item.role}>{item.name}</option>
			)
		});
		//Button Log
		let log = (!this.state.login) ? <Login logIn = {this.logIn.bind(this)}/> : <Logout logOut = {this.logOut.bind(this)}/> ;

		//View Table
		let countries = () => {
			if(this.state.login){
				return <CountryList
							change = {this.state.change}
							countries = {this.state.countries}
							showInput = {this.showInput.bind(this)}
							rewriteText = {this.rewriteText.bind(this)}


							users = {this.state.users}
							roles = {this.state.roles}
							show = {this.state.showChanging}
							showChanging = {this.showChanging.bind(this)}
							changeUserForNewRole = {this.changeUserForNewRole.bind(this)}
							changeNewRoleForUser = {this.changeNewRoleForUser.bind(this)}
							saveChanges = {this.saveChanges.bind(this)}
						/>
			}
		}
		//View Select
		let select = () => {
			if(!this.state.login){
				return (
					<select className = 'form-control col-sm-2' value = {this.state.change} onChange = {this.changeUser.bind(this)}>
						{options}
					</select>
				)
			}
			return <h1>Hello</h1>
		}
		return (
			<div>
				<h1>{(!this.state.login) ? 'Change User' : 'Top of Countries'}</h1>
				{/*SELECT*/}
				{select()}
				<br />
				{/*LOG BUTTON*/}
				{log}
				<br />

				{/*COUNTRIES TABLE*/}
				{countries()}
			</div>
		)
	}
}
export default App;
