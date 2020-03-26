import { connect } from 'react-redux'
import CakeList from '../components/CakeList'
import { selectCakes, selectGetCakesError } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  cakes: selectCakes(state),
  error: selectGetCakesError(state)
})

export default connect(
  mapStateToProps
)(CakeList)
