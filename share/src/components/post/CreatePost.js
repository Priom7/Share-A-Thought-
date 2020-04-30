import React, { Component } from "react";
import {connect} from 'react-redux'
import {createPost} from '../../store/actions/postActions'
import { Redirect } from "react-router-dom";

class CreatePost extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createPost(this.state)
    this.props.history.push('/')
  };

  render() {

    const {auth} = this.props;
    if(!auth.uid){
      return <Redirect to="/signin"></Redirect>
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Wite Your Post</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Post Content</label>
            <textarea id="content"  className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">Post</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    createPost: (post)=>dispatch(createPost(post))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreatePost)
