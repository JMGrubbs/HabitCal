import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = () => {
  const [habits, setHabits] = useState([]);
  console.log(habits);

  // setHabits({name:'pushups', completion: false})

  useEffect(() => {
    axios
      .get('http://localhost:3000/habits')
      .then((res) => {
        console.log('This ', res);
        setHabits(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {habits.map((habit) => (
        <ul>{habit.name}</ul>
      ))}
    </div>
  );
};

export default FetchData;
