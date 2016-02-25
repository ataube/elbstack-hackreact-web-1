import React, { PropTypes } from 'react'
import LanguageSwitch from '../containers/LangSwitch'
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
            {this.props.username}
            <IndexLink to="/" className={styles.signout} />
          </span>
        </div>

        <p className={styles.languages}>
          <LanguageSwitch />
        </p>
      </nav>
    )
  }
}
