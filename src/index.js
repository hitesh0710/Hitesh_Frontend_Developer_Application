import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { JOB_API_URL } from './helpers/urls';
import Menu from './components/menu';
import Routes from './routes';

const client = new ApolloClient({
  uri: JOB_API_URL,
  cache: new InMemoryCache()
});

ReactDOM.render(<React.StrictMode>

  <ApolloProvider client={client}>
    <BrowserRouter>
      <Menu />
      <Routes />
    </BrowserRouter>
  </ApolloProvider>


</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();