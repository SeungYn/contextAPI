import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext, { ColorProvider } from './contexts/color';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
