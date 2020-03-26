import React from 'react'
import PropTypes from 'prop-types'
import CakeDetails from './CakeDetails'

const CakeList = ({ cakes, error }) => (
  <div className="row">
    <div className="col-sm">
      <h2>Browse Cakes</h2>
      { error && <div className="alert alert-danger" role="alert">
        Error loading cakes - please contact support@example.com
      </div>
      }
      <div className="d-flex flex-wrap">
        {cakes && cakes.map(cake =>
          <CakeDetails
            key={cake.cakeId}
            {...cake}
          />
        )}
      </div>
    </div>
  </div>

)

CakeList.propTypes = {
  cakes: PropTypes.arrayOf(PropTypes.shape({
    cakeId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default CakeList
