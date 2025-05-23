import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Counter from './Components/Counter/Counter'
import { Provider } from 'react-redux'
import App from './App'
import store from './app/store'

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
