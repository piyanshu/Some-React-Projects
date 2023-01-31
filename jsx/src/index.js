// Import react and reactDom libraries

import react from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get a reference to the div with id root
const el = document.getElementById('root');

// Tell the react to take control on that element
const root = ReactDOM.createRoot(el)

// Create a component
// function App(){
  
//   return <input placeholder="Hi there"/>
// }

// Show the component on the screen
root.render(<App/>)