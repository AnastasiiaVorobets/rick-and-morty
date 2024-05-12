import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import client from './graphql/client';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  root
);

reportWebVitals();