import React, { PropTypes } from 'react'
import styles from './Nav.scss'
import { IndexLink } from 'react-router'

export default class Nav extends React.Component {

  static propTypes = {
    username: PropTypes.string.isRequired
  }

  render() {
    return (
      <nav className="text-center">
        <div className={styles.userContainer}>
          <span className={styles.user}>
            <IndexLink to="/" className={styles.signout} />
          </span>
        </div>
      </nav>
    )
  }
}
