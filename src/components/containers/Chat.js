import React, { Component } from 'react'
import { connect } from 'react-redux'
import { joinChat } from '../../redux/actions/chat'

@connect(
  state => ({
    sendbird: state.sendbird
  }),
  dispatch => ({
    joinChat: (channelId) => dispatch(joinChat(channelId))
  })
)
export default class Chat extends Component {

  componentDidMount() {
    console.log('ChatDidMount')
    this.props.joinChat()
  }

  render() {
    return <div>Chat</div>
  }
}
