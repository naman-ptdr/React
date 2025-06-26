import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// React uses hooks like `useState` to manage component state (i.e., dynamic data).
// Whenever state changes via its setter function, React re-renders the component with the updated value.

function App() {
  // useState returns an array: [currentValue, updateFunction]
  // `counter` is the current state value.
  // `setCounter` is the function used to update `counter`.
  const [counter, setCounter] = useState(5); // initial counter value is 5

  // Function to increase counter (max limit: 20)
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1); // Always use counter + 1, not counter++
    } else {
      console.log("Value can't be more than 20");
    }
  };

  // Function to decrease counter (min limit: 0)
  const subValue = () => {
    if (counter > 0) {
      setCounter(counter - 1); // Always use counter - 1, not counter--
    } else {
      console.log("Value can't be less than zero");
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      
      <button onClick={addValue}>Increase By One</button>
      <br /><br />
      <button onClick={subValue}>Decrease By One</button>
    </>
  );

  // Note: No need to import 'React' in modern setups using Vite or Create React App.
  // Babel takes care of JSX transformation under the hood.
}

export default App;












// above project using js


// let counter = 5;

// const counterSpan = document.getElementById('counter');
// const increaseBtn = document.getElementById('increaseBtn');
// const decreaseBtn = document.getElementById('decreaseBtn');

// // Update the UI
// function updateCounter() {
//   counterSpan.textContent = counter;
// }

// // Increase function
// increaseBtn.addEventListener('click', () => {
//   if (counter < 20) {
//     counter++;
//     updateCounter();
//   } else {
//     console.log("Value can't be more than 20");
//   }
// });

// // Decrease function
// decreaseBtn.addEventListener('click', () => {
//   if (counter > 0) {
//     counter--;
//     updateCounter();
//   } else {
//     console.log("Value can't be less than zero");
//   }
// });
