import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Food from './Food'

export default function Foods() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    let ignore = false

    async function startFetching() {
      const json = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      )
      if (!ignore) {
        setFoods(json.data.categories)
      }
    }

    startFetching()

    return () => {
      ignore = true
    }
  }, [])
  return (
    <div className="grid grid-cols-3 justify-items-center gap-y-3 items-center p-12">
      {foods && foods.map((food) => <Food key={food.idCategory} food={food} />)}
    </div>
  )
}
