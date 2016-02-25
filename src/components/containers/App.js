import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DocumentMeta from 'react-document-meta'
import { IntlProvider } from 'react-intl'
import config from '../../config'
import styles from './App.scss'

@connect(
  state => ({
    language: state.language
  })
)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    language: PropTypes.object
  }

  render() {
    return (
      <IntlProvider messages={this.props.language.messages}>
        <div className={styles.app}>
          <DocumentMeta {...config.app} />
          {this.props.children}
        </div>
      </IntlProvider>
    )
  }
}
