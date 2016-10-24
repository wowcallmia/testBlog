import React, { Component } from 'react';
import BlogPage from './BlogPage';

export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>React Webpack</h1>
        <BlogPage/>
        {this.props.children}
      </div>
    )
  }
}
