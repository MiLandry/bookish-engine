import React, { Component } from "react"
import PropTypes from "prop-types"
import FoodRow from "../FoodRow/FoodRow"

const FoodTable = ({ foodData, onChange }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>name</th>
          <th>Delicious?</th>
          <th>Healthy?</th>
        </tr>
        {foodData.map(({ key, label, isDelicious, isHealthy }) => {
          return (
            <FoodRow
              key={key}
              id={key}
              label={label}
              isDelicious={isDelicious}
              isHealthy={isHealthy}
              onChange={onChange}
            />
          )
        })}
      </tbody>
    </table>
  )
}
FoodTable.propTypes = {}
export default FoodTable
