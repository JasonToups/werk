import React, { Component } from 'react'
import { Button, Modal, Form, Input } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './Modal.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
    show: false,
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.close()
        this.props.setCurrentUser(res.data.data)
        this.props.history.push('/profile');

      })
      .catch(err => {
        console.log(err.response);
      })
  };

  open = () => {
    this.setState({ show: true })
  }

  close = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <>
        <Button onClick={this.open}> Log In!</Button>
        <Modal open={this.state.show} onClose={this.close}>
          <Modal.Header>Log In!</Modal.Header>
          <Modal.Content Form>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor='name'>Email</label>
                <Input
                  onChange={this.handleChange}
                  type='email'
                  id='email'
                  name='email'
                  value={this.state.email}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='name'>Password</label>
                <Input
                  onChange={this.handleChange}
                  type='password'
                  id='password'
                  name='password'
                  value={this.state.password}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color='green'
              onClick={this.handleSubmit}>
              Login
              </Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}




export default withRouter(Login);