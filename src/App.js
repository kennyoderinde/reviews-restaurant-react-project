import './App.css';
import { Route, Routes } from 'react-router'
import Home from "./pages/Home"
import Filter from "./pages/Filter/Filter"
import Header from "./Components/Header/Header"
import Reminder from "./pages/Reminder/Reminder"
import Footer from "./Components/Footer/Footer"
import Restaurant from "./pages/Restaurant/Restaurant"
import Reviews from './pages/Reviews/Reviews'


const App = () => {   //nameless or anonymous function

  
  return ( 
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/reminder" element={<Reminder/>}/>
        <Route path='/reviews' element={<Reviews />}/>
        <Route path='/filter' element={<Filter />}/>
        <Route path='/restaurant' element={<Restaurant />}/>
      </Routes>
      <Footer />

    </div>
  )
      
  }

export default App;
