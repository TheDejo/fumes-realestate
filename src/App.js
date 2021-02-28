import React, {useState} from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import {SliderData} from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import Footer from './components/Footer';

const App = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar  toggle={toggle}/>
      <Dropdown open={open} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <Footer />
    </>
  );
};

export default App;