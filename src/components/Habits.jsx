import Habit from './Habit';
import HabitAddForm from './HabitAddForm';

const Habits = (props) => {
  return (
    <>
      <HabitAddForm onAdd={props.onAdd} save={props.habitSave} />
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
      <button className='habit-reset' onClick={props.reset}>
        리셋
      </button>
    </>
  );
};

export default Habits;
