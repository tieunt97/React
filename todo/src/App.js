import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FormInput from './components/FormInput';
import MainSection from './components/MainSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section id="main">
          <FormInput />
          <MainSection />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
