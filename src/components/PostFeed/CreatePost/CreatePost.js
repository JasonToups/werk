import React, { Component } from 'react';
import { Button, Modal, Form, Input, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import '../../NavBar/Modal/Modal.css';

class CreatePost extends Component {
  state = {
    user_submitted_from: '',
    name: '',
    description: '',
    image: '',
    show: false,
  };

  componentDidMount() {
    const userId = localStorage.getItem('uid');

    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
        withCredentials: true,
      })
      .then(res => {
        console.log(res);
        this.setState({
          user_submitted_from: userId,
          name: res.data.data.name,
        });
        console.log(this.state.user_submitted_from);
        console.log(this.state.name);
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/posts`, this.state, {
        withCredentials: true,
      })
      .then(res => {
        console.log(res);
        this.close();
        this.props.setCurrentUser(res.data.data);
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err.response);
      });
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
        <Button icon color='black' onClick={this.open}>
          Add Post
        </Button>
        <Modal open={this.state.show} onClose={this.close}>
          <Modal.Header>Create a Post!</Modal.Header>
          <Modal.Content Form>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor='name'>Name</label>
                <Input
                  onChange={this.handleChange}
                  type='string'
                  id='name'
                  name='name'
                  value={this.state.name}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='image'>Image URL</label>
                <Input
                  onChange={this.handleChange}
                  type='string'
                  id='image'
                  name='image'
                  placeholder='Enter an image URL'
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='description'>Description</label>
                <Input
                  onChange={this.handleChange}
                  type='string'
                  id='description'
                  name='description'
                  placeholder='Enter a description'
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleSubmit}>
              Create Post
            </Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}

export default withRouter(CreatePost);
