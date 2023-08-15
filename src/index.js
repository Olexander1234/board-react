import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
const theme = {
  colors:{
    container: '#AFEEEE',
    borderContainer: '#40E0D0',
    card: '#ffa500',
    borderCard: '#ff8c00',
    green: 'green',
    purple:'purple',
    cold: '#FFD700',
    black: 'black'
  }
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
   
  </React.StrictMode>
);
