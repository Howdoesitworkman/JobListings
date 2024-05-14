import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />     {/** This is how we connect the Main component '<App />' with the <div> that has the id "root" */}
  </React.StrictMode>,
)
