import ColorContext, { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorConsumer>
      {(value) => {
        return (
          <>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: value.state.color,
              }}
            ></div>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: value.state.subcolor,
              }}
            ></div>
          </>
        );
      }}
    </ColorConsumer>
  );
};

export default ColorBox;
