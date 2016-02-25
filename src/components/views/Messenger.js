import React, { Component } from 'react'
import { connect } from 'react-redux'
import i18n from '../../utils/i18n'
import Nav from '../elements/Nav'
import ListChannels from '../containers/ListChannels'
import ChannelList from '../elements/ChannelList'
import styles from './Messenger.scss'

@connect(
  state => ({
    sendbird: state.sendbird,
    channels: state.channels
  })
)
export default class Messenger extends Component {
  render() {

    const channelList = this.props.channels.list ? <ChannelList channels={this.props.channels.list} /> : null

    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <Nav username={this.props.sendbird.user_name} />
          <ListChannels />
        </div>
        <div className={styles.chat}>
          { channelList }
          <div className={styles.intro}>
            <span className={styles.heading}>{i18n.translate('messenger.title')}</span>
            <p>
              First Todos:
            </p>
            <ul>
              <li>Make page refreshable. It breaks after cmd+R</li>
              <li>Fix the bugs we hid for you ;)</li>
              <li>Extend the messenger with 1on1 / group chat</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
