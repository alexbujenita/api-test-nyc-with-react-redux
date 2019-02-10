
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIp } from '../actions'
import IpPopModal from './IpPopModal.js'

const mapStateToProps = (state) => ({
  ipAddress: state.ipAddress.ip
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getIp
  }, dispatch)
}

//Export App connected to redux store
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(IpPopModal)
