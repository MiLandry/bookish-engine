import React, { Component } from "react"
import PropTypes from "prop-types"

const FoodRow = ({ label, isDelicious, isHealthy, onChange, id, isLoaded }) => {
  let className = "food-row"
  className += isDelicious ? " delicious" : " not-delicious"
  className += isHealthy ? " healthy" : " not-healthy"
  if (isLoaded) {
    className += " animate"
  }

  return (
    <tr className={className}>
      <td>{label}</td>
      <td>
        <input
          type="checkbox"
          name="isDelicious"
          id={id}
          checked={isDelicious}
          onChange={onChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="isHealthy"
          id={id}
          checked={isHealthy}
          onChange={onChange}
        />
      </td>
    </tr>
  )
}
FoodRow.propTypes = {
  label: PropTypes.string.isRequired,
}

export default FoodRow
