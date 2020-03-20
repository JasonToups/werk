import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "semantic-ui-react";
import axios from "axios";
import "./Post.css";
import dollarEmpty from './dollar-empty.svg';
import dollarFilled from './dollar-filled.svg';
import heartEmpty from './heart-empty.svg';
import heartFilled from './heart-filled.svg';
import GigCreate from '../../Gig/GigCreate/GigCreate';

class Post extends Component {
  state = {
    show: false,
    favorite: false
  }
  toggleShow = () => {
    this.setState({
      show: this.state.show ? this.state.show = false : this.state.show = true
    })
  }

  toggleFavorite = () => {
    this.setState({
      favorite: this.state.favorite ? this.state.favorite = false : this.state.favorite = true
    })
  }

  deletePost = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/posts/${id}`, { withCredentials: true })
      .then(res => {
        console.log(`axios response`, res);
        this.props.getPosts();
        // console.log(`state.posts:`, this.state.posts);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { _id, image, name, description } = this.props.post;
    return (
      <section className="post-container">
        <div className="post-image-container">
          <img
            className="post-image"
            src={image}
            alt={name}
            onClick={this.toggleShow}
          />
          <div className="post-header">
            <h3
              onClick={this.toggleShow}>
              {name}
            </h3>
            <div className="post-header-icons">
              <img
                src={`${this.state.show ? dollarFilled : dollarEmpty}`}
                onClick={this.toggleShow}></img>
              <img
                className="favorite"
                src={`${this.state.favorite ? heartFilled : heartEmpty}`}
                onClick={this.toggleFavorite}></img>
            </div>
          </div>
        </div>
        <div className={`post-body ${this.state.show ? 'show' : ''}`}>
          {localStorage.getItem('uid') ? <><p>{description}</p>
            <div className="button-container">
              {this.state.show &&
                <GigCreate
                  user_submitted_from={this.props.post.user_submitted_from} />}
              <Input
                size='small'
                type="number"
                placeholder='tip your queen' />
              <Button
                type='submit'
                color='green'>tip</Button>
              <Button
                color='red'
                onClick={() => this.deletePost(_id)}>Delete</Button>
            </div>
          </> : <p>Login in to Book a Queen!</p>}
        </div>
      </section >
    );
  }
};

export default Post;