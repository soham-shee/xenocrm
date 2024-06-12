import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import Info from './pages/Info.js'
import Login from './pages/Login.js'
import Dashboard from './pages/Dashboard.js'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
