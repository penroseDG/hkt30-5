import React from 'react'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './component/Carousel';

export default function App() {
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
}
