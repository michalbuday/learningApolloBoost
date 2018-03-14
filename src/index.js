import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Detail from './Detail';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp />, document.getElementById('root'));
