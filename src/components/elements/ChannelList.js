import React, { Component, PropTypes } from 'react'
import styles from './ChannelList.scss'

export default class ChannelList extends Component {

  static propTypes = {
    channels: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.list}>
          {this.props.channels.map((channel) =>
            <div key={channel.id} className={styles.item}>
              {channel.name}
            </div>
          )}
        </div>
      </div>
    )
  }
}
