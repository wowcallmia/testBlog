import {EventEmitter} from 'events'
import AppDispatcher from '../AppDispatcher'
import * as types from '../actions/ActionTypes';


let _messages = null;

class BlogStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      let {type, payload} = action;
      switch(type) {
        case(types.RECEIVE_MESSAGES):
        _messages = payload.data
        this.emit('CHANGE');
        break;

      }
      console.log('_messages: ', _messages)

    });
    console.log('_messages: ', _messages)
  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }
  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }

  getMessages() {
    return _messages;
  }
}

export default new BlogStore();
