import React, { Component } from 'react'
import styles from './IntroText.scss'

export default class IntroText extends Component {

  render() {
    return (
      <div className={styles.intro}>
        <span className={styles.heading}>Messenger</span>
        <p>
          First Todos:
        </p>
        <ul>
          <li>Make page refreshable. It breaks after cmd+R</li>
          <li>Fix the bugs we hid for you ;)</li>
          <li>Extend the messenger with 1on1 / group chat</li>
        </ul>
      </div>
    )
  }
}
