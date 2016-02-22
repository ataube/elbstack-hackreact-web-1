import React, { Component } from 'react'
import i18n from '../../utils/i18n'
import { Grid, Row, Col } from 'react-bootstrap'

export default class Imprint extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <h1>{i18n.translate('page2.title')}</h1>
          </Col>
        </Row>
      </Grid>
    )
  }
}
