import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'
import i18n from '../../utils/i18n'
import classNames from 'classnames'

import styles from './Footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Grid>
          <Row className={classNames('text-center', styles.row)}>
            <Col className={styles.content}>
              <Link className={styles.textLink} to="/page2">{i18n.translate('page2.title')}</Link>
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}
