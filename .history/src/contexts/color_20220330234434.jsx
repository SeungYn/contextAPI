import { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubcolor] = useState('red');
};

export default ColorContext;
