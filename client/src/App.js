import React, { Component } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: 'https://joyful-kangaroo-02396e.netlify.app/graphql',
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className='container'>
            <Navbar />
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
