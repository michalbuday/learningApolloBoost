import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import AddView from './addView';

import logo from './logo.svg';
import './App.css';

const StyledLink = styled(Link) `
  color: palevioletred;
`;

const GET_ARTICLES = gql`
  query {articles{
  id,
  title,
  text,
  author,
}}
`
const ListArticles = (props) => (props.articles.map((article, index) =>
  <AddView key={index + "addView"} id={article.id}>
    <StyledLink
      key={index + "link"}
      to={{
        pathname: `/detail/${article.id}`
      }}
      style={{ textDecoration: "none" }}
    >
      <li key={index} >
        {article.title}
      </li>
    </StyledLink>
  </AddView>)
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Articles in React</h1>
        </header>
        <Query query={GET_ARTICLES}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;

            return <div><ListArticles articles={data.articles} /></div>
          }}
        </Query>
      </div>
    );
  }
}

export default App;
