import React, { Component } from 'react'
import { connect } from 'react-redux'
import i18n from '../../utils/i18n'
import Profile from '../elements/Profile'
import ListChannelsBtn from '../elements/ListChannelsBtn'
import ChannelList from '../elements/ChannelList'
import TeamLogo from '../elements/TeamLogo'
import styles from './Messenger.scss'

@connect(
  state => ({
    sendbird: state.sendbird
  })
)
export default class Messenger extends Component {

  state = {
    channelListOpen: false
  }

  onOpenChannels() {
    this.setState({
      channelListOpen: !this.state.channelListOpen
    })
  }

  render() {

    const channelList = this.state.channelListOpen ? <ChannelList /> : null

    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <TeamLogo />
          <Profile username={this.props.sendbird.user_name}/>
          <ListChannelsBtn onClick={this.onOpenChannels.bind(this)}/>
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
