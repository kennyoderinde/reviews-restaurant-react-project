import './App.css';
import { Route, Routes } from 'react-router'
import Filter from "./pages/Filter/Filter"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Restaurant from "./pages/Restaurant/Restaurant"
import Reviews from './pages/Reviews/Reviews'


const App = () => {   //nameless or anonymous function

  
  return ( 
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Reviews />}/>
        <Route path='/filter' element={<Filter />}/>
        <Route path='/restaurant' element={<Restaurant />}/>
      </Routes>
      <Footer />

    </div>
  )
      
  }

export default App;
