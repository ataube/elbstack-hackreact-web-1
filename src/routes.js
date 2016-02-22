import React from 'react'
import {IndexRoute, Route} from 'react-router'
import App from 'components/containers/App'
import Home from 'components/views/Home'
import Page2 from 'components/views/Page2'
import NotFound from 'components/views/NotFound'

export default () => {

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      <Route path="/page2" component={Page2} />

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  )
}
