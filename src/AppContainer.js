
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHospitals } from './actions'
import App from './App.js'

const mapStateToProps = (state) => ({
  hospitals: state.hospitals
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getHospitals
  }, dispatch)
}

//Export App connected to redux store
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
