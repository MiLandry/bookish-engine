import React, { Component } from "react"
import PropTypes from "prop-types"

const FoodRow = ({ label, isDelicious, isHealthy }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>
        <input type="checkbox" name="isDelicious" id="" />
      </td>
      <td>
        <input type="checkbox" name="isHealthy" id="" />
      </td>
    </tr>
  )
}
FoodRow.propTypes = {
  label: PropTypes.string.isRequired,
}

export default FoodRow
