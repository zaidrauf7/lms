import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './Context/Context.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './theme-provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
  <ContextProvider>
  {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
    <App />
    {/* </ThemeProvider> */}
    </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

