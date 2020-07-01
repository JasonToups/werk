// external imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image, Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
// internal imports
import Register from './Modal/ModalRegister';
import Login from './Modal/ModalLogin';
import CreatePost from '../PostFeed/CreatePost/CreatePost';
import logo from './Werk-Logo.svg';
import './NavBar.css';

class NavBar extends Component {
	state = {
		// sets default active item
		activeItem: 'profile',
		userType: '',
	};
	// passes props to the navbar - e=event
	handleItemClick = (e, props) => this.setState({ activeItem: props.name });

	componentDidMount() {
		const userId = localStorage.getItem('uid');

		if (userId) {
			axios
				.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
					withCredentials: true,
				})
				.then(res => {
					console.log(res);
					this.setState({
						userType: res.data.data.userType,
					});
					console.log(this.state.userType);
				})
				.catch(err => {
					console.log(err.response);
				});
		}
	}

	render = props => {
		// console.log(this.props)
		const { activeItem } = this.state;
		return (
			<div className='navbar'>
				<Menu inverted>
					<Menu.Item header>
						<Image src={logo} as='a' size='small' href='/'></Image>
					</Menu.Item>
					<Menu.Menu position='right'>
						{this.props.currentUser ? (
							<>
								{this.state.userType === 'Queen' ? (
									<Menu.Item>
										<CreatePost />
									</Menu.Item>
								) : (
									''
								)}
								<Menu.Item>
									<Button icon color='black' onClick={this.handleItemClick}>
										<Icon size='large' name='mail' />
									</Button>
								</Menu.Item>
								<Menu.Item name='profile' onClick={this.handleItemClick}>
									<Link to='/profile'>Profile</Link>
								</Menu.Item>
								<Menu.Item
									name='logout'
									active={activeItem === 'logout'}
									onClick={this.props.logout}></Menu.Item>
							</>
						) : (
							<>
								<Menu.Item>
									<Login setCurrentUser={this.props.setCurrentUser} />
								</Menu.Item>
							</>
						)}
					</Menu.Menu>
				</Menu>
			</div>
		);
	};
}
export default NavBar;
