import React, { Component } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './img/logo.svg';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className='container'>
            <img src={logo} alt='logo' />
            <Routes>
              <Route path='/' element={<Launches />} exact />
              <Route path='/launch/:flight_number' element={<Launch />} exact />
            </Routes>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
