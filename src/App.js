import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import FoodTable from "./FoodTable/FoodTable"

const data = {
  e5d9d9f5: {
    label: "ice cream",
    isDelicious: true,
    isHealthy: false,
  },
  a9ba692b: {
    label: "pizza",
    isDelicious: true,
    isHealthy: false,
  },
  ze128a47: {
    label: "spinach",
    isDelicious: false,
    isHealthy: true,
  },
}
const dataAsArray = Object.keys(data).map(key => {
  const datum = {
    ...data[key],
    key: key,
  }
  return datum
})

class App extends Component {
  constructor() {
    super()
    this.name = "Mike"
    this.state = {
      foodData: dataAsArray,
    }
  }

  render() {
    return (
      <div className="App">
        <FoodTable foodData={this.state.foodData} />
      </div>
    )
  }
}

export default App
