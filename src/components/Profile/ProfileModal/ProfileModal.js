import React, { Component } from 'react';
import { Button, Modal, Form, Input } from 'semantic-ui-react';
import axios from 'axios';

class ProfileModal extends Component {
  state = {
    profile: {},
    userImage: '',
    name: '',
    userType: '',
    email: '',
    homeCity: '',
    gigAppearanceFee: '',
    gigPerformanceFee: '',
    gigRequirementDescription: '',
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
          profile: res.data.data,
          userType: res.data.userType,
          userImage: res.data.data.userImage,
          name: res.data.data.name,
          email: res.data.data.email,
          homeCity: res.data.data.homeCity,
          gigAppearanceFee: res.data.data.gigAppearanceFee,
          gigPerformanceFee: res.data.data.gigPerformanceFee,
          gigRequirementDescription: res.data.data.gigRequirementDescription,
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  setProfileInfo = user => {
    this.setState({
      profile: user,
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }; // makes the form fillable

  handleRadioChange = (e, { value }) => this.setState({ userType: value });

  handleSubmit = event => {
    const userId = localStorage.getItem('uid');
    console.log(event);
    event.preventDefault();
    console.log(this.state);
    axios
      .put(`${process.env.REACT_APP_API_URL}/users/${userId}`, this.state)
      .then(res => {
        console.log(res);
        this.close();
        this.props.getProfile();
        // directs user to profile after submit
        this.props.history.push('/profile');
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

  // TODO add the S3 Image Uploader to the Form.
  render() {
    return (
      <>
        <button className='profile-edit' onClick={this.open}>
          {' '}
          Edit your profile!
        </button>
        <Modal open={this.state.show} onClose={this.close}>
          <Modal.Header>Edit your profile!</Modal.Header>
          <Modal.Content Form>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group inline required>
                <label>User Type</label>
                <Form.Radio
                  label='Queen'
                  value='Queen'
                  // defaultChecked
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
              <Form.Field>
                <label htmlFor='userImage'>Profile Image URL</label>
                <Input
                  onChange={this.handleChange}
                  type='text'
                  id='userImage'
                  name='userImage'
                  placeholder={this.state.profile.userImage}
                  value={this.state.userImage}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='name'>Name</label>
                <Input
                  onChange={this.handleChange}
                  type='text'
                  id='name'
                  name='name'
                  placeholder={this.state.profile.name}
                  value={this.state.name}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='email'>Email</label>
                <Input
                  onChange={this.handleChange}
                  type='email'
                  id='email'
                  name='email'
                  placeholder={this.state.profile.email}
                  value={this.state.email}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='homeCity'>Home City</label>
                <Input
                  onChange={this.handleChange}
                  type='text'
                  id='homeCity'
                  name='homeCity'
                  placeholder={this.state.profile.homeCity}
                  value={this.state.homeCity}
                />
              </Form.Field>
              {this.state.profile.userType === 'Queen' ? (
                <>
                  <Form.Field>
                    <label htmlFor='gigAppearanceFee'>Appearance Fee</label>
                    <Input
                      onChange={this.handleChange}
                      type='number'
                      id='gigAppearanceFee'
                      name='gigAppearanceFee'
                      placeholder={this.state.profile.gigAppearanceFee}
                      value={this.state.gigAppearanceFee}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor='gigPerformanceFee'>Performance Fee</label>
                    <Input
                      onChange={this.handleChange}
                      type='number'
                      id='gigPerformanceFee'
                      name='gigPerformanceFee'
                      placeholder={this.state.profile.gigPerformanceFee}
                      value={this.state.gigPerformanceFee}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor='gigRequirementDescription'>
                      Gig Requirements
                    </label>
                    <input
                      onChange={this.handleChange}
                      type='text'
                      id='gigRequirementDescription'
                      name='gigRequirementDescription'
                      placeholder={this.state.profile.gigRequirementDescription}
                      value={this.state.gigRequirementDescription}
                    />
                  </Form.Field>
                </>
              ) : (
                ''
              )}
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleSubmit}>
              Save
            </Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}

export default ProfileModal;
