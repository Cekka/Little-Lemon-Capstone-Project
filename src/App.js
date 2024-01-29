import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import About from './components/About/About';
import Testimonial from './components/TestimonialList';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Nav/>
      <Main/>
      <Menu/>
      <Testimonial/>
      <About/>
      <Footer/>
    </Provider>
  );
}

export default App;
