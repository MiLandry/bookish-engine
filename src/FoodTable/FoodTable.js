import React, { Component } from "react"
import PropTypes from "prop-types"
import FoodRow from "../FoodRow/FoodRow"

const FoodTable = ({ foodData }) => {
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
              label={label}
              isDelicious={isDelicious}
              isHealthy={isHealthy}
            />
          )
        })}
      </tbody>
    </table>
  )
}
FoodTable.propTypes = {}
export default FoodTable
