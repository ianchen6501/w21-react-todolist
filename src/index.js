import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    main_yellow: '#DECF1C',
    main_blue: '#233346',
    main_brown: '#AD9C7E',
    main_lightbrown: '#F3DDC6',
    main_lightgray: '#bebebe',
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
