import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import CocktailInfo from './pages/CocktailInfo'
import Cocktails from './pages/Cocktails'
import Home from './pages/Home'
import MyList from './pages/MyList'

function App() {
  const [save, setSave] = useState([]);

  let numberOfItems = save.length;
 
  function adddToSave(cocktail) {
    setSave([...save, cocktail])
  }

  function removeItem(item) {
    setSave(save.filter(cocktail => +cocktail.idDrink !== +item.idDrink))
  }

  useEffect(() => {
    console.log(save)
  }, [save])

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cocktails' element={<Cocktails />}></Route>
          <Route path='/cocktails/:id' element={<CocktailInfo adddToSave={adddToSave} save={save}/>}></Route>
          <Route path='/mylist' element={<MyList save={save} removeItem={removeItem} setSave={setSave}/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
