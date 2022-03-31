import ColorContext, { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorConsumer>
      {(value) => {
        return (
          <>
            <div style={{ width: '64px', height: '64px' }}></div>
          </>
        );
      }}
    </ColorConsumer>
  );
};

export default ColorBox;
