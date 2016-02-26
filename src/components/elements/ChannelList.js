import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './ChannelList.scss'
import { listChannels } from '../../redux/actions/channels'

@connect(
  state => ({
    channels: state.channels
  }),
  dispatch => ({
    listChannels: () => dispatch(listChannels())
  })
)
export default class ChannelList extends Component {

  componentWillMount() {
    this.props.listChannels()
  }

  renderList() {
    return this.props.channels.list.map((channel) =>
      <div key={channel.id} className={styles.item}>
        {channel.name}
      </div>
    )
  }

  render() {

    const content = Array.isArray(this.props.channels.list) ? this.renderList() : <span>Lade Channels</span>

    return (
      <div className={styles.container}>
        <div className={styles.list}>
          {content}
        </div>
      </div>
    )
  }
}
