import React, { PropTypes } from 'react'

const Languages = ({ onClick }) => {

  return (
    <span>
      <a onClick={ event => {
        event.preventDefault()
        onClick(event, 'de')
      }}>DE</a>
      &nbsp; | &nbsp;
      <a onClick={ event => {
        event.preventDefault()
        onClick(event, 'en')
      }}>EN</a>
    </span>
  )
}

Languages.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Languages
