import React, { Component } from 'react';
import axios from 'axios';
import './Profile.css';
import ProfileModal from './ProfileModal/ProfileModal';
import MyPostFeed from './MyPostFeed/MyPostFeed';
class Profile extends Component {
	state = {
		profile: {},
		showEditForm: false,
		posts: [],
	};

	componentDidMount() {
		this.getProfile();
		// this.getPosts()
	}

	setProfileInfo = user => {
		this.setState({
			profile: user,
		});
	};
	// TODO use this as the model to update components when state changes. For Navbar.
	getProfile = () => {
		const userId = localStorage.getItem('uid');
		axios
			.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
				withCredentials: true,
			})
			.then(res => {
				console.log(res);
				this.setState({
					profile: res.data.data,
					// posts: postSeed
				});
				this.getPosts();
			})
			.catch(err => {
				console.log(err.response);
			});
	};

	setProfileState = event => {
		this.setState({ [this.profile]: event });
	};

	render() {
		console.log('render profile');
		console.log(this.state.profile);
		return (
			<>
				<div className='profile-header'>
					<h1 className='profile-header-text'>Profile</h1>
					<ProfileModal getProfile={this.getProfile} />
				</div>
				<br></br>
				<hr></hr>
				{this.state.profile.userImage ? (
					<div className='profile-image-container'>
						<img
							className='profile-image'
							src={this.state.profile.userImage}
							alt={this.state.profile.name}
						/>
					</div>
				) : (
					''
				)}
				<div className='profile-info'>
					<h1>
						Name: <span>{this.state.profile.name}</span>
					</h1>
					<h3>Type: {this.state.profile.userType}</h3>
					<h3>Email: {this.state.profile.email}</h3>
					<h3>HomeCity: {this.state.profile.homeCity}</h3>
				</div>
				{this.state.profile.userType === 'Queen' ? (
					<>
						<div className='profile-gig-requirements'>
							<hr></hr>
							<h1>Gig Requirements</h1>
							<h3>Appearance Fee:{this.state.profile.gigAppearanceFee}</h3>
							<h3>Performance Fee:{this.state.profile.gigPerformanceFee}</h3>
							<h3>
								Requirements: {this.state.profile.gigRequirementDescription}
							</h3>
							<hr></hr>
						</div>
						<MyPostFeed />
					</>
				) : (
					''
				)}
			</>
		);
	}
}

export default Profile;
