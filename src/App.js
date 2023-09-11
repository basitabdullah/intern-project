import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemDetails from './components/ItemDetails';
import FetchDrinks from './components/FetchDrinks';
import Home from './components/Home';
import Connect from './components/Connect';
import Footer from './components/Footer';
import './styles/colors.scss'
import './styles/Connect.scss'

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/drinks" element={<FetchDrinks/>} />
        <Route path="/details/:id" element={<ItemDetails/>} />
        <Route path="/connect" element={<Connect/>} />
      
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App