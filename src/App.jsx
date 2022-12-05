import { useState } from 'react'
import './App.css'
import { Header, Cards, Footer }  from "./components/index"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Slider  from './components/Slider';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Slider />
      <Cards />
      <Footer/>
    </div>
  )
}

export default App
