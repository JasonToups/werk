import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/NavBar/Modal/ModalLogin';
import PostFeed from '../components/PostFeed/PostFeed';
import Profile from '../components/Profile/Profile';
import Welcome from '../components/Welcome/Welcome';

export default ({ currentUser, setCurrentUser }) => (
	<Switch>
		<Route exact path='/' component={currentUser ? PostFeed : Welcome} />
		<Route
			path='/login'
			render={() => (
				<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
			)}
		/>
		<Route exact path='/postfeed' component={PostFeed} />
		<Route path='/profile' component={Profile} />
	</Switch>
);
