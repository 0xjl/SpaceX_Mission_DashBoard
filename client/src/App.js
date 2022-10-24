import React, { Component } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './App.css';
import logo from './img/logo.svg';
import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className='container'>
          <img src={logo} alt='logo'></img>
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
