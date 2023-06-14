import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          {/* <Route path='/' element={Home} />
          <Route path='/flight-search' element={FlightSearch} />
          <Route path='/flight-details' element={FlightDetails} />
          <Route path='/flight-booking' element={FlightBooking} />
          <Route path='/flight-confirmation' element={FlightConfirmation} /> */}
        </Routes>
      <Footer />
    </Router>

      
      
      
    </>
  )
}

export default App
