import React, { useEffect, useState } from 'react';
import './App.css';
import Habits from './components/Habits';
import Navbar from './components/Navbar';

function App({ habitService }) {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    habitService.getHabits().then((data) => setHabits(data));
  }, [habitService]);

  const getHabits = () => {
    habitService
      .getHabits()
      .then((data) => setHabits(data))
      .catch((error) => {
        console.error(error);
      });
  };

  const increase = async (habit) => {
    const count = habit.count + 1;
    habitService
      .onChangeCount(habit, count)
      .then(() => {
        setHabits((habits) =>
          habits.map((item) => {
            if (item.id === habit.id) {
              return { ...habit, count: habit.count + 1 };
            }
            return item;
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const decrease = async (habit) => {
    const count = habit.count - 1 < 0 ? 0 : habit.count - 1;

    habit.count &&
      habitService
        .onChangeCount(habit, count)
        .then(() => {
          setHabits((habits) =>
            habits.map((item) => {
              if (item.id === habit.id) {
                return {
                  ...habit,
                  count,
                };
              }
              return item;
            })
          );
        })
        .catch((error) => {
          console.error(error);
        });
  };

  const remove = async (habit) => {
    habitService
      .onRemove(habit) //
      .then(() => {
        setHabits((habits) => habits.filter((item) => item.id !== habit.id));
      });

    setHabits(habits.filter((item) => habit.id !== item.id));
  };

  const onAdd = async (name) => {
    habitService
      .onAdd(name)
      .then(() => {
        getHabits();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const reset = async () => {
    const totalCount = habits.filter((habit) => habit.count > 0).length;

    totalCount &&
      habitService
        .onReset()
        .then(() => {
          setHabits((habits) =>
            habits.map((habit) => {
              if (habit.count !== 0) {
                return { ...habit, count: 0 };
              }
              return habit;
            })
          );
        })
        .catch((error) => {
          console.error(error);
        });
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
        reset={reset}
      />
    </>
  );
}

export default App;
