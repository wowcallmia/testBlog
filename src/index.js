import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Layout from './components/Layout'
import BlogPage from './components/BlogPage'

render(
  <div className='container text-center'>
    <Router history = { browserHistory }>
      <Route path = '/' component = { Layout }/>
      {/* <Route path = '/blog' component = { BlogPage }/> */}
    </Router>
  </div>,
  document.getElementById('root')
)
