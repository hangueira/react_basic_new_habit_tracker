import React, { useState } from 'react';
import './App.css';
import Habits from './components/Habits';

import Navbar from './components/Navbar';

function App() {
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

  const decrease = (habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count - 1 < 0 ? 0 : habit.count - 1 };
        }
        return item;
      })
    );
  };

  const remove = (habit) => {
    setHabits(habits.filter((item) => habit.id !== item.id));
  };

  const onAdd = (name) => {
    const newHabits = [...habits, { id: Date.now(), name, count: 0 }];
    console.log(newHabits);
    setHabits(newHabits);
  };

  return (
    <>
      <Navbar
        count={habits.filter((habit) => habit.count > 0).length}
        totalCount={habits.length}
      />

      <Habits
        habits={habits}
        increase={increase}
        decrease={decrease}
        remove={remove}
        onAdd={onAdd}
      />
    </>
  );
}

export default App;
