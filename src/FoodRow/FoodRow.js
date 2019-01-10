import React from "react"
import PropTypes from "prop-types"
import TD from "../core/CustomTableData"

const FoodRow = ({ label, isDelicious, isHealthy, onChange, id, isLoaded }) => {
  let className = "food-row"
  className += isDelicious ? " delicious" : " not-delicious"
  className += isHealthy ? " healthy" : " not-healthy"
  if (isLoaded) {
    className += " animate"
  }

  return (
    <tr className={className}>
      <TD>{label}</TD>
      <TD>
        <input
          type="checkbox"
          name="isDelicious"
          id={id}
          checked={isDelicious}
          onChange={onChange}
        />
      </TD>
      <TD>
        <input
          type="checkbox"
          name="isHealthy"
          id={id}
          checked={isHealthy}
          onChange={onChange}
        />
      </TD>
    </tr>
  )
}
FoodRow.propTypes = {
  label: PropTypes.string.isRequired,
  isDelicious: PropTypes.bool.isRequired,
  isHealthy: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
}
export default FoodRow
