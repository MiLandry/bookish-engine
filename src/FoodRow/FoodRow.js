import React, { Component } from "react"
import PropTypes from "prop-types"

const FoodRow = ({ label, isDelicious, isHealthy, onChange, id }) => {
  return (
    <tr>
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
