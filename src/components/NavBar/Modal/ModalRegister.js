import React, { Component } from 'react';
import { Button, Modal, Form, Input } from 'semantic-ui-react';
import axios from 'axios';

class Register extends Component {
	state = {
		userType: '',
		name: '',
		email: '',
		password: '',
		password2: '',
		show: false,
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}; // makes the form fillable

	handleRadioChange = (e, { value }) => this.setState({ userType: value });

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
		axios
			.post(`${process.env.REACT_APP_API_URL}/auth/signup`, this.state)
			.then(res => {
				console.log(res);
				this.close();
				this.props.history.push('/login');
			})
			.catch(err => {
				console.log(err.response);
			}); // on submit
	};

	open = () => {
		this.setState({ show: true });
	};

	close = () => {
		this.setState({ show: false });
	};

	render() {
		return (
			<>
				<Button onClick={this.open}> Sign Up!</Button>
				<Modal open={this.state.show} onClose={this.close}>
					<Modal.Header>Register for an Account!</Modal.Header>
					<Modal.Content Form>
						<Form onSubmit={this.handleSubmit}>
							<Form.Group inline required>
								<label>User Type</label>
								<Form.Radio
									label='Queen'
									value='Queen'
									checked={this.state.userType === 'Queen'}
									onChange={this.handleRadioChange}
								/>
								<Form.Radio
									label='Fan'
									value='Fan'
									checked={this.state.userType === 'Fan'}
									onChange={this.handleRadioChange}
								/>
							</Form.Group>
							<Form.Field required>
								<label htmlFor='name'>Name</label>
								<Input
									onChange={this.handleChange}
									type='text'
									id='name'
									name='name'
									value={this.state.name}
								/>
							</Form.Field>
							<Form.Field required>
								<label htmlFor='name'>Email</label>
								<Input
									onChange={this.handleChange}
									type='email'
									id='email'
									name='email'
									value={this.state.email}
								/>
							</Form.Field>
							<Form.Field required>
								<label htmlFor='name'>Password</label>
								<Input
									onChange={this.handleChange}
									type='password'
									id='password'
									name='password'
									value={this.state.password}
								/>
							</Form.Field>
							<Form.Field required>
								<label htmlFor='password2'>Confirm Password</label>
								<Input
									onChange={this.handleChange}
									className='form-control form-control-lg'
									type='password'
									id='password2'
									name='password2'
									value={this.state.password2}
								/>
							</Form.Field>
						</Form>
					</Modal.Content>
					<Modal.Actions>
						<Button color='green' onClick={this.handleSubmit}>
							Register
						</Button>
					</Modal.Actions>
				</Modal>
			</>
		);
	}
}

export default Register;
