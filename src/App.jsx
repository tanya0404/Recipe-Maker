import React from 'react'
import Mainroute from './routes/Mainroute'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Navbar/>
        <main className="mt-8">
          <Mainroute/>
        </main>
      </div>
    </div>
  )
}

export default App;



