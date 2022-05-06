import Habit from './Habit';
import HabitAddForm from './HabitAddForm';

const Habits = (props) => {
  return (
    <>
      <HabitAddForm onAdd={props.onAdd} />
      <ul>
        {props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            increase={props.increase}
            decrease={props.decrease}
            remove={props.remove}
          />
        ))}
      </ul>
    </>
  );
};

export default Habits;
