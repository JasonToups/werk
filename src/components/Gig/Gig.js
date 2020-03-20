import React, { Form, Button, Component } from "react";
import { Link } from "react-router-dom";
import dollarEmpty from './dollar-empty.svg';
import dollarFilled from './dollar-filled.svg';
import heartEmpty from './heart-empty.svg';
import heartFilled from './heart-filled.svg';
import { Modal, Segment } from "semantic-ui-react";

class Gig extends Component {
  state = {
    queen_submitted_to: "",
    user_submitted_from: "",
    name: "",
    address: "",
    date_of_gig: "",
    cost: 0,
    visibility: true,
    approval: true,
    show: false,
  }

  toggleShow = () => {
    this.setState({
      show: this.state.show ? this.state.show = false : this.state.show = true
    })
  }


  render() {
    const { _id, queen_submitted_to, user_submitted_from, name, address, date_of_gig, visibility, approval } = this.props.post;
    return (
      <Segment>
        <h1>name</h1>
        <h2>address</h2>
        <h2>visibility</h2>
        <h2>approval</h2>
      </Segment>
    );
  }
};

export default Gig;