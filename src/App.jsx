import { Routes, Route } from 'react-router-dom';
import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Header from './Components/Header';
import Home from './pages/Home';
import Landing from './pages/Landing';
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
