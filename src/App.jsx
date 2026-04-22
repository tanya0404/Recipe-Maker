import React from 'react'
import { useLocation } from 'react-router-dom'
import Mainroute from './routes/Mainroute'
import Navbar from './components/Navbar'

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {isAuthPage ? (
        <Mainroute />
      ) : (
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <Navbar/>
          <main className="mt-6 sm:mt-8">
            <Mainroute/>
          </main>
        </div>
      )}
    </div>
  )
}

export default App;



