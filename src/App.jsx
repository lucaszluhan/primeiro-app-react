import './App.css';
import Router from './Router';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';

const themes = {
  dark: {
    bgColor: '#333',
    color: 'white',
  },
  light: {
    bgColor: '#fff',
    color: '#333',
  },
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
