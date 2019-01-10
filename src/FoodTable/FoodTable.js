import React from "react"
import PropTypes from "prop-types"
import FoodRow from "../FoodRow/FoodRow"
import TH from "../core/CustomTableHeader"

const FoodTable = ({ data, onChange, isLoaded }) => {
  const food = Object.keys(data).map(key => {
    const datum = {
      ...data[key],
      key: key,
    }
    return datum
  })
  return (
    <table>
      <tbody>
        <tr>
          <TH>name</TH>
          <TH>Delicious?</TH>
          <TH>Healthy?</TH>
        </tr>
        {food.map(({ key, label, isDelicious, isHealthy }) => {
          return (
            <FoodRow
              key={key}
              id={key}
              label={label}
              isDelicious={isDelicious}
              isHealthy={isHealthy}
              onChange={onChange}
              isLoaded={isLoaded}
            />
          )
        })}
      </tbody>
    </table>
  )
}
FoodTable.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
}
export default FoodTable
