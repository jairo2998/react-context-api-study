import './App.css'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Navbar from './components/Navbar';

import { CounterContextProvider } from './context/CounterContext';


function App() {
  
  return (
    <CounterContextProvider>
      <div className='App'>        
        <h1>Context</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CounterContextProvider>
  )
}

export default App
