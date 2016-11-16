import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import styles from './styles.module.css';

const App = () => {
  return(
    <div className={styles.wrapper}>
      Text
    </div>
  );
};

const mountNode = document.querySelector('#root');
ReactDOM.render(
  <App />,
  mountNode
);
