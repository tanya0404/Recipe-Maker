
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import RecipeContext from './context/RecipeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
<AuthProvider>
  <RecipeContext>
    <BrowserRouter>
      <App />
      <ToastContainer/>
    </BrowserRouter>
  </RecipeContext>
</AuthProvider>
);
