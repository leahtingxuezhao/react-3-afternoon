import React, { Component } from "react";

import "./App.css";

import Header from "./Header/Header";
import Compose from "./Compose/Compose";
import Post from "./Post/Post";

import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://practiceapi.devmountain.com/api/posts")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      });
  }

  updatePost = (id, text) => {
    axios
      .put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, {
        text: text,
      })
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      });
  };

  deletePost = (id) => {
    axios
      .delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`)
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      });
  };

  createPost = (post) => {
    axios
      .post("https://practiceapi.devmountain.com/api/posts", { text: post })
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      });
  };

  render() {
    const { posts } = this.state;
    let singlePost = posts.map((item, id) => {
      //key={id} or key={index}, which one is better
      return (
        <Post
          post={item}
          key={id}
          updatePost={this.updatePost}
          deletePost={this.deletePost}
        ></Post>
      );
    });

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">
          <Compose createPost={this.createPost} />
          {singlePost}
        </section>
      </div>
    );
  }
}

export default App;
