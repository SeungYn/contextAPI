import { useState } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
  const { state } = useState(ColorContext);
  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      ></div>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.subcolor,
        }}
      ></div>
    </>
  );
};

export default ColorBox;
