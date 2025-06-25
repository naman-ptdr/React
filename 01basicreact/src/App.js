function App() {
  return (
    <div>
      <h1>Chai Aur React | Hello, I Am Naman</h1>

      <h1>React Project Setup – Notes</h1>

      <h2>Why is React Excellent?</h2>
      <ul>
        <li>Makes it easy to manage and build complex frontend apps.</li>
        <li>Less code required after initial learning.</li>
        <li>Large ecosystem of tools, libraries, and plugins.</li>
      </ul>

      <h2>JSX and "Pollution" Analogy</h2>
      <ul>
        <li>Browsers do not understand JSX directly.</li>
        <li>
          JSX must be transpiled to JavaScript using <strong>Babel</strong>.
        </li>
        <li>Virtual DOM improves performance and efficiency.</li>
      </ul>

      <h2>React Project Setup (Create React App)</h2>
      <p>Use the following command to set up a new project:</p>
      <pre>npx create-react-app my-app</pre>
      <ul>
        <li>Popular but heavy utility</li>
        <li>Not ideal for lightweight modern apps</li>
        <li>
          <strong>Recommended:</strong> Use <code>Vite</code> or{" "}
          <code>Parcel</code>
        </li>
      </ul>

      <h2>Scripts in Create React App</h2>
      <ul>
        <li>
          <code>npm start</code> – Runs in development mode
        </li>
        <li>
          <code>npm build</code> – Builds for production
        </li>
        <li>
          <code>npm test</code> – Runs test suite
        </li>
        <li>
          <code>npm run eject</code> – Ejects the app config
        </li>
      </ul>

      <h2>Recommendation</h2>
      <p>
        <strong>Note:</strong> <code>create-react-app</code> is not preferred
        for modern setups. Use <strong>Vite</strong> for faster performance and
        lighter builds.
      </p>

      <h2>Vite Setup</h2>
      <pre>
        npm create vite@latest
        <br />
        npm install
      </pre>
    </div>
  );
}

export default App;
