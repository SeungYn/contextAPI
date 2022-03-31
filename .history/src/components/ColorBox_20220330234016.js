import ColorContext from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => {
        return (
          <div
            style={{
              width: '64px',
              height: '64px',
              background: value.color,
            }}
          ></div>
        );
      }}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
