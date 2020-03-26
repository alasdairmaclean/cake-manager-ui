import React from 'react'
import PropTypes from 'prop-types'

const CakeDetails = ({ cakeId, title, description, image }) => (
  <div className="p-2 cake-details" style={{width: '18rem'}}>
      <div className="card">
          <img className="card-img-top cake-image" src={image} alt="Cake"/>
          <div className="card-body">
              <p className="title">{title}</p>
              <p className="description">{description}</p>
          </div>
      </div>
  </div>
)

CakeDetails.propTypes = {
    cakeId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default CakeDetails
