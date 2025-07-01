import { useState } from "react";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile />

      <div>
        <h1>Context API</h1>
        <p>
          The Context API in React.js is a built-in feature that allows you to
          share data (like state, themes, authentication, etc.) across
          components without having to pass props manually at every level.
        </p>

        <h3>When to Use Context API</h3>
        <p>
          Use it when many components need access to the same global data,
          especially in deeply nested trees.
        </p>

        <ul>
          <li>
            Context is not a replacement for state management libraries like
            Redux in complex apps.
          </li>
          <li>
            Use Context + useReducer for more scalable global state logic.
          </li>
        </ul>
      </div>
    </UserContextProvider>
  );
}

export default App;
