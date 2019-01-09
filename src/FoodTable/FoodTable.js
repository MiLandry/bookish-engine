import React, { Component } from "react"
import PropTypes from "prop-types"
import FoodRow from "../FoodRow/FoodRow"

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
          <th>name</th>
          <th>Delicious?</th>
          <th>Healthy?</th>
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
FoodTable.propTypes = {}
export default FoodTable
