import React from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './app/page.jsx'
import './app/global.css'

const root = createRoot(document.getElementById('root'))
root.render(<HomePage />)
