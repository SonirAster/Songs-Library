import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageContent from './components/pageContent/PageContent';

const App = () => {
  return (
    <div className='sitePage'>
      <Header />
      <PageContent />
      <Footer />
    </div>
  )
}

export default App;



