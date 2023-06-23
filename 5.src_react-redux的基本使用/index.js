import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// 监测redux中状态的改变，如果redux的状态改变，那么重新渲染app组件
store.subscribe(()=>{
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})
