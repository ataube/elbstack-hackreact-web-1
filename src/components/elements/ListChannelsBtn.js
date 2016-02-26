import React, { Component, PropTypes } from 'react'
import styles from './ListChannelsBtn.scss'

export default class ListChannelsBtn extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  onListChannels() {
    this.props.onClick()
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
