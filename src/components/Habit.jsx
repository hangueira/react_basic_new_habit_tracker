import React from 'react';

const Habit = (props) => {
  return (
    <li className='habit'>
      <span className='habit-name'>Reading</span>
      <span className='habit-count'>8</span>
      <button className='habit-button habit-increase'>더하기</button>
      <button className='habit-button habit-decrease'>빼기</button>
      <button className='habit-button habit-delete'>삭제</button>
    </li>
  );
};

export default Habit;
