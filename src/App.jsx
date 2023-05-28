import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style/App.css'

import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Main from './components/Main/main'
import { ScreenContext } from './Context/ScreenContext'

function App() {

  const [dimensionScreen, setDimensionScreen] = useState({
      widthPage: window.innerWidth
  })

  return (
    <ScreenContext.Provider value={{ dimensionScreen, setDimensionScreen }} >
        <div className='app'>
          <Header />
          <Main />
          <Footer />
        </div>
     </ScreenContext.Provider>

  )
}

export default App
