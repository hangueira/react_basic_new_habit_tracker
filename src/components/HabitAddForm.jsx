import React, { useRef } from 'react';

const Input = (props) => {
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type='text'
        className='add-input'
        placeholder='취미를 입력하세요'
      />
      <button className='add-button'>등록</button>
    </form>
  );
};

export default Input;
