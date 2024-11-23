import React from 'react'
import ReactDOM from 'react-dom/client'
import ActionApp from './action-app'
import '../styles.css'

const root = ReactDOM.createRoot(document.getElementById('action-root')!)

root.render(
  <React.StrictMode>
    <ActionApp />
  </React.StrictMode>
)
