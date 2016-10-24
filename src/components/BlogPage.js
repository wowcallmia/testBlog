import React, { Component } from 'react'
import BlogStore from '../stores/BlogStore'
import BlogActions from '../actions/BlogActions'
import uuid from 'uuid'
import marked from 'marked'
import moment from 'moment'
import { Link } from 'react-router'

export default class BlogPage extends Component {
  constructor() {
    super();
    this.state = {
      messages: BlogStore.getMessages()
    }
    this._onChange = this._onChange.bind(this)
    this.sendNewMessage = this.sendNewMessage.bind(this)
  }

  componentWillMount() {
    BlogStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    BlogStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
       messages: BlogStore.getMessages()
    })
  }

  sendNewMessage(e) {
    const { newMessage } = this.refs
    let body = newMessage.value
    let message = {
      id: uuid(),
      dateTime: moment().format('lll'),
      userName: 'anonymous',
      body: body
    }
    BlogActions.sendMessage(message)
  }

  render() {

    const { messages } = this.state

    let marked = require('marked');
    marked.setOptions({
    highlight: function (messages) {
      return require('highlight.js').highlightAuto(messages).value;
    }
  });
    });
    let messageBoard;

      currentRoomShow = (

        <div>
          <div >
            {!messages[0] ? <p>Enter Post</p> : messageBoard = messages.map((message, i) => {
              return (
                <div  key={message.id}>
                  <h5>{message.dateTime} - {message.userName} said:</h5>
                  <p>{message.body}</p>
                </div>
              )
            })}
          </div>
          <div >
            <input ref='newMessage' type="text"/>
            <button  onClick={this.sendNewMessage}>Send</button>
          </div>
        </div>
          )

              }
            }
