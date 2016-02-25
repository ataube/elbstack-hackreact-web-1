import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listChannels } from '../../redux/actions/channels'
import styles from './ListChannels.scss'

@connect(
  state => ({
    sendbird: state.sendbird
  }),
  dispatch => ({
    listChannels: () => dispatch(listChannels())
  })
)
export default class ListChannels extends Component {

  onListChannels() {
    this.props.listChannels()
  }

  render() {
    return (
      <div onClick={this.onListChannels.bind(this)} className={styles.button}>
        list channels
        <span className={styles.icon} />
      </div>
    )
  }
}
