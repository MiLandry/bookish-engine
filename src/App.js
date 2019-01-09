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
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    console.log("event", event)
    console.log("event.target", event.target)
    console.log("event.target.checked", event.target.checked)
    console.log("this.state.foodData", this.state.foodData)
  }

  render() {
    return (
      <div className="App">
        <FoodTable foodData={this.state.foodData} onChange={this.onChange} />
      </div>
    )
  }
}

export default App
