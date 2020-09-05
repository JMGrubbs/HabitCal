import React, {useState, useEffect} from 'react';
import axios from "axios";

const DataFetching = () => {
  const [habits, setHabits] = useState([]);
  console.log(habits)

  useEffect(() => {
    axios.get('http://localhost:3000/habits')
      .then(res => {
        console.log(res)
        setHabits(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <ul>
        {habits.map(habit => (
          <div>
            <lu>{habit.name}</lu>
            <lu>{habit.complete}</lu>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default DataFetching;
