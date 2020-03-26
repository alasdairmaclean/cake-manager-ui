import { connect } from 'react-redux'
import { addCake } from '../actions'
import AddCake from '../components/AddCake'
import { selectAddCakeErrors } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  errors: selectAddCakeErrors(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addCake: (cake) => dispatch(addCake(cake))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCake)
