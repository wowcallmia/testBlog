import API from '../API'
import AppDispatcher from '../AppDispatcher';
import * as types from './ActionTypes';

const ServerActions = {

  receive(blog) {
     AppDispatcher.dispatch({
      type: types.RECEIVE_MESSAGES,
      payload: { blog }
    })
  }

}
export default ServerActions
