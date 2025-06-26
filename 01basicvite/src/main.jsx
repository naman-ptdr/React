import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'




const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'Click me to google'
)
ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
    // anotherElement
    // reactElement

)
