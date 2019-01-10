import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import FoodTable from "./FoodTable/FoodTable"

const initialFood = {
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

function App() {
  const [food, setFood] = useState(initialFood)
  const [isLoaded, setIsLoaded] = useState(false)

  const onChange = event => {
    const { id, checked, name } = event.target
    food[id][name] = checked
    setFood(food)
  }

  return (
    <div className={"App"}>
      <FoodTable data={food} onChange={onChange} isLoaded={isLoaded} />
    </div>
  )
}

export default App
