import React, { useEffect, useState } from 'react';
import './App.css';
import Habits from './components/Habits';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const baseUrl = 'http://localhost:8080';

  const getHabits = async () => {
    await axios
      .get(baseUrl + '/habit')
      .then((result) => {
        setHabits(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [habits, setHabits] = useState([]);

  useEffect(() => {
    getHabits();
  }, []);

  const increase = async (habit) => {
    await axios
      .put(baseUrl + '/habit/' + habit.id, {
        count: habit.count + 1,
      })
      .then(() => {
        setHabits((habits) =>
          habits.map((item) => {
            if (item.id === habit.id) {
              return { ...habit, count: habit.count + 1 };
            }
            return item;
          })
        );
      });
  };

  const decrease = async (habit) => {
    await axios
      .put(baseUrl + '/habit/' + habit.id, {
        count: habit.count - 1 < 0 ? 0 : habit.count - 1,
      })
      .then(() => {
        setHabits((habits) =>
          habits.map((item) => {
            if (item.id === habit.id) {
              return {
                ...habit,
                count: habit.count - 1 < 0 ? 0 : habit.count - 1,
              };
            }
            return item;
          })
        );
      });
  };

  const remove = (habit) => {
    setHabits(habits.filter((item) => habit.id !== item.id));
  };

  const onAdd = async (name) => {
    await axios
      .post(baseUrl + '/habit', {
        name,
        count: 0,
      })
      .then((result) => {
        console.log(result.data);
        getHabits();
      })
      .then(() => {
        if (window.confirm('정말 저장하시겠습니까')) {
          alert('저장되었습니다.');
        } else {
          alert('취소되었습니다.');
        }
      });
  };

  const reset = () => {
    const newHabits = habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });

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
        reset={reset}
      />
    </>
  );
}

export default App;
