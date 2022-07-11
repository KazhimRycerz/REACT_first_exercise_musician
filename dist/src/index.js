import ReactDOM from "react-dom/client"; //we use ReactDOM to render into the DOM
import App from './App.js';
import React from "react" 



const container = document.getElementById("root");

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
