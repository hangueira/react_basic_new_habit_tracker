const Habit = (props) => {
  const increase = () => {
    props.increase(props.habit);
  };

  const decrease = () => {
    props.decrease(props.habit);
  };

  return (
    <li className='habit'>
      <span className='habit-name'>{props.habit.name}</span>
      <span className='habit-count'>{props.habit.count}</span>
      <button className='habit-button habit-increase' onClick={increase}>
        더하기
      </button>
      <button className='habit-button habit-decrease' onClick={decrease}>
        빼기
      </button>
      <button className='habit-button habit-delete'>삭제</button>
    </li>
  );
};

export default Habit;
