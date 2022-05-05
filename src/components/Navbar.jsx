import React from 'react';

const Navbar = (props) => {
  return (
    <>
      <h1>
        Habit Traker {props.count} / {props.totalCount}
      </h1>
    </>
  );
};

export default Navbar;
