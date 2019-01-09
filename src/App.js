import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import FoodTable from "./FoodTable/FoodTable"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      food: {
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
      },
    }
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    window.setTimeout(() => {
      let state = this.state
      this.setState({ ...state, isLoaded: true })
    }, 800)
  }

  onChange(event) {
    const { id, checked, name } = event.target
    let { food } = this.state
    food[id][name] = checked

    this.setState({ ...this.state, food })
  }
  i
  render() {
    const { isLoaded } = this.state

    return (
      <div className={"App"}>
        <FoodTable
          data={this.state.food}
          onChange={this.onChange}
          isLoaded={isLoaded}
        />
      </div>
    )
  }
}

export default App
