import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DocumentMeta from 'react-document-meta'
import { IntlProvider } from 'react-intl'
import config from '../../config'
import Footer from '../elements/Footer'
import Nav from '../elements/Nav'
import styles from './App.scss'

@connect(
  state => ({
    language: state.language
  }),
  () => {
    return {}
  }
)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    language: PropTypes.object
  }

  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <IntlProvider messages={this.props.language.messages}>
        <div className={styles.app}>
          <DocumentMeta {...config.app} />
          <Nav />
          {this.props.children}
          <Footer />
        </div>
      </IntlProvider>
    )
  }
}
