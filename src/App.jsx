import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import About from './Components/About';
import Forms from './Components/Forms';
import Footer from './Components/Footer';


export default function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Forms/>
      <Footer/>
    </div>
  )
}
