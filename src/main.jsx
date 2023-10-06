import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Side from './components/side-bar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Side />
  </React.StrictMode>,
)
