import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
      Text
    </div>
  );
};

const mountNode = document.querySelector('#root');
ReactDOM.render(
  <App />,
  mountNode
);
