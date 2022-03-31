import { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});
