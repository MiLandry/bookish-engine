import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import FoodTable from "./FoodTable/FoodTable"

class App extends Component {
  constructor() {
    super()
    this.name = "Mike"
    this.state = {
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
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    const { id, checked, name } = event.target
    console.log("event", event)
    console.log("event.target", event.target)
    console.log("event.target.checked", event.target.checked)
    console.log("this.state", this.state)
    console.log("event.target.name", event.target.name)
    let food = this.state
    food[id][name] = checked

    this.setState(food)
  }
  i
  render() {
    return (
      <div className="App">
        <FoodTable data={this.state} onChange={this.onChange} />
      </div>
    )
  }
}

export default App
