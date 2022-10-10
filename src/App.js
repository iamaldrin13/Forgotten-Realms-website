import GlobalStyles from './styles/GlobalStyles'
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {light} from './styles/Themes';
import 'swiper/swiper-bundle.css';


import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Faq from './components/sections/Faq';
import Roadmap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import Team from './components/sections/Team';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
   <>
   <GlobalStyles />
   <ThemeProvider theme={light}>
    <Navigation />
    <Home />
    <About />
    <Roadmap />
    <Showcase />
    <Team />
    <Faq />
    <Footer />
    <ScrollToTop />
   </ThemeProvider>
   </>
  );
}

export default App;
