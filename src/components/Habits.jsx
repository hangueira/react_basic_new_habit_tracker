import Habit from './Habit';

const Habits = (props) => {
  return (
    <>
      {props.habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          increase={props.increase}
          decrease={props.decrease}
          remove={props.remove}
        />
      ))}
    </>
  );
};

export default Habits;
