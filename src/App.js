import React, { useState, useEffect } from "react"
import "./App.css"
import FoodTable from "./FoodTable/FoodTable"
import Button from "./core/CustomButton"

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

  /**
   * this effect declares the app 'loaded' after about a
   * second for the purposes of not showing animation.
   */
  useEffect(
    () => {
      window.setTimeout(() => {
        setIsLoaded(true)
      }, 800)
    },
    [isLoaded],
  )

  /**
   * handler for toggling checkboxes
   */
  const onChange = event => {
    const { id, checked, name } = event.target
    food[id][name] = checked
    setFood(food)
  }

  const logData = () => {
    console.log(food)
  }

  return (
    <div className={"App"}>
      <FoodTable data={food} onChange={onChange} isLoaded={isLoaded} />
      <Button onClick={logData}>Log Data</Button>
    </div>
  )
}

export default App
