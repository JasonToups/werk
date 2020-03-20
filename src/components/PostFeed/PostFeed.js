import React from "react";
import Post from "./Post/Post";
import axios from "axios";
class PostFeed extends React.Component {
  state = {
    posts: [],
  };
  //TODO update this to include a feed argument of either "index" or "profile"
  getPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts`, { withCredentials: true })
      .then(res => {
        console.log(`axios response`, res);
        this.setState({
          posts: res.data.data
        });
        // console.log(`state.posts:`, this.state.posts);
      })
      .catch(err => {
        console.log(err);
      });
  };
  // TODO how do I only call this method on the Profile page?
  // getUserPosts = () => {
  //   console.log('starting get user posts')
  //   const userId = localStorage.getItem('uid');
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/posts/user/${userId}`, { withCredentials: true })
  //     .then(res => {
  //       console.log(`axios response`, res);
  //       this.setState({
  //         posts: res.data.data
  //       });
  //       // console.log(`state.posts:`, this.state.posts);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // TODO possibly update componentDidUpdate() to include the posts in state. If the posts update then destroy existing posts, and render the new ones. This way, try to figure out how to get the user posts to render on the profile page.
  componentDidUpdate() {
    console.log('Posts Updated!')
    console.log(this.state.posts)
  }

  // TODO When the component mounts, it will automatically get all of the posts. I need to make sure that I redirect to get the user posts when it's on the profile page.
  componentDidMount() {
    console.log("PostFeed Mounted");
    this.getPosts();
  }

  // TODO this is the method that's being invoked on return. I might need to figure out how to change the getPosts method to include another property, to control if I'm on the main page or the profile. 
  displayPosts = posts => {
    return posts.map(post => {
      return <Post key={Math.random() * 10000} post={post} getPosts={this.getPosts} />;
    });
  };

  render() {
    return (
      <>
        <section className="post-feed">
          {this.state.posts.length ? (
            this.displayPosts(this.state.posts)
          ) : (
              <h1>No Posts Yet!</h1>
            )}
        </section>
      </>
    );
  }
}

export default PostFeed