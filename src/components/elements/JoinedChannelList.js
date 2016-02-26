import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(
  state => ({
    channels: state.channels,
    activeChannels: state.activeChannels
  })
)
export default class JoinedChannelList extends Component {

  onJoin() {

  }

  renderList() {
    return this.props.activeChannels.map((channelId) =>
      <div key={channelId}>
        {this.props.channels.list[channelId].name}
      </div>
    )
  }

  render() {

    const content = this.props.activeChannels.length > 0 ? this.renderList() : <span>Keine aktiven channels</span>

    return (
      <div>
        {content}
      </div>
    )
  }
}
