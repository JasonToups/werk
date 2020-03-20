import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button, Modal, Form, Input, Radio } from "semantic-ui-react";

class GigCreate extends Component {
  state = {
    queen_submitted_to: "",
    name_of_queen: '',
    gig_appearance_fee: 0,
    gig_performance_fee: 0,
    gig_requirement_description: "",
    user_submitted_from: "",
    name_of_gig: "",
    address: "",
    date_of_gig: "",
    cost: 0,
    visibility: true,
    approval: true,
    show: false,
  }


  componentDidMount() {
    const userId = localStorage.getItem('uid');

    this.getUser(userId, 'user');
    this.getUser(this.props.user_submitted_from, 'queen');

  }

  getUser = (id, type) => {
    axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`, { withCredentials: true })
      .then(res => {
        console.log(res);
        if (type === "user") {
          this.setState({
            user_submitted_from: id,
            name: res.data.data.name,
          })
        }
        if (type === "queen") {
          this.setState({
            queen_submitted_to: id,
            name_of_queen: res.data.data.name,
            gig_appearance_fee: res.data.data.gig_appearance_fee,
            gig_performance_fee: res.data.data.gig_performance_fee,
            gig_requirement_description: res.data.data.gig_requirement_description,
          })
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/gigs`, this.state, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.close()
        this.props.setCurrentUser(res.data.data)
        this.props.history.push('/');

      })
      .catch(err => {
        console.log(err.response);
      })
  };
  // TODO the open and close methods could be redundant. Use toggleShow() if possible
  open = () => {
    this.setState({ show: true })
  }

  close = () => {
    this.setState({ show: false })
  }

  toggleShow = () => {
    this.setState({
      show: this.state.show ? this.state.show = false : this.state.show = true
    })
  }


  render() {
    //TODO store the queen's id in State, and make an axios call for their profile, and grab the info from there.
    return (
      <>
        <Button
          icon
          color='purple'
          onClick={this.open}>Book</Button>
        <Modal
          open={this.state.show}
          onClose={this.close}>
          <Modal.Header>Book {this.state.name_of_queen}!</Modal.Header>
          <Modal.Content Form>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor='name'>Name of Gig</label>
                <Input
                  onChange={this.handleChange}
                  type='string'
                  id='name'
                  name='name'
                  placeholder='Name of gig.'
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='image'>Address</label>
                <Input
                  onChange={this.handleChange}
                  type='string'
                  id='address'
                  name='address'
                  placeholder='Enter the address of the gig.'
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='description'>Description</label>
                <Input
                  onChange={this.handleChange}
                  type='string'
                  id='description'
                  name='description'
                  placeholder='Describe the gig.'
                />
              </Form.Field>
              <Form.Group
                inline
                required>
                <label>Public or Private Event</label>
                <Form.Radio
                  label='Public'
                  value='Public'
                  checked={this.state.visibility === true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label='Private'
                  value='Private'
                  checked={this.state.visibility === false}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Field hidden>
                <label htmlFor='description'>Queen's ID</label>
                <Input
                  onChange={this.handleChange}
                  type='string'
                  id='description'
                  name='description'
                  disabled
                  value={this.state.queen_submitted_to}
                />
              </Form.Field>

            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color='green'
              onClick={this.handleSubmit}>
              Submit Gig
              </Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
};

export default GigCreate;