import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

const root = document.getElementById('root')

if (root === null) {
  throw new Error('No root component found.')
}

createRoot(root).render(
  <React.StrictMode>
    <App message='Hello' />
  </React.StrictMode>
)
