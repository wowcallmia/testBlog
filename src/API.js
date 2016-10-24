import { put } from 'axios'
import axios from 'axios'
import ServerActions from './actions/ServerActions'
import { browserHistory } from 'react-router'

const API = {
  sendMessage(blog) {
    put(`/api/blog/`, blog)
    .then(res => {
      let { data } = res
      ServerActions.receive(data)
    })
    .catch(console.error)
  }

}

export default API;
