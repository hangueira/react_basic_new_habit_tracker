import React, { useCallback, useState } from 'react';
import Habit from './Habit';

const Habits = (props) => {
  const [habits, setHabits] = useState([
    {
      id: 0,
      name: 'reading',
      count: 0,
    },
    {
      id: 1,
      name: 'running',
      count: 2,
    },
    {
      id: 2,
      name: 'coding',
      count: 3,
    },
  ]);

  const increase = (habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  };

  const decrease = (habit) => {};

  return (
    <>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          increase={increase}
          decrease={decrease}
        />
      ))}
    </>
  );
};

export default Habits;