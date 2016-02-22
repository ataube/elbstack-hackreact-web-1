import { connect } from 'react-redux'
import Languages from '../elements/Languages'
import { setCountryCode, changeLanguage } from '../../redux/actions/language'

const dispatchToProps = (dispatch) => {
  return {
    onClick: (event, locale) => {
      dispatch(setCountryCode(locale))
      dispatch(changeLanguage(locale))
    }
  }
}

const LangSwitch = connect(
  undefined,
  dispatchToProps
)(Languages)

export default LangSwitch
