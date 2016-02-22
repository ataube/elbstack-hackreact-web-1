import React from 'react'
import { IndexLink } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'
import LanguageSwitch from '../containers/LangSwitch'
import i18n from '../../utils/i18n'

export default class Nav extends React.Component {

  render() {
    return (
      <nav>
        <Grid>
          <Row>
            <Col md={8}>
              <IndexLink to="/"><span className="h1">{i18n.translate('title')}</span></IndexLink>
            </Col>
            <Col md={4} className="text-right">
              <LanguageSwitch />
            </Col>
          </Row>
        </Grid>
      </nav>
    )
  }
}
