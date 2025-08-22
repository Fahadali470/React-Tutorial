import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Custom React!</h1>
  )
}
// const anotherElement =  (
//   <a href="https://google.com/" target='_blank'>Visit the Google</a>
// )
// const ele='Fahad';
// const reactElment = React.createElement(
//   'a',
//   { href:'https://google.com', target:'_blank'},
//   'CLick here to visit Google',
//   ele
// )
createRoot(document.getElementById('root')).render(
  reactElment
)
