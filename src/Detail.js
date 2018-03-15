import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';


class Detail extends Component {
  componentDidMount() {
    this.forceUpdate();
  }
  render() {
    const { id } = this.props.match.params;

    const GET_ARTICLE = gql`
      query {article(id: ${id}){
        title,
        text,
        author,
        views
      }}
    `
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Detail of Article in React</h1>
        </header>
        <Query query={GET_ARTICLE}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;
            if (!data.article) return <div>No article with id:{id}</div>;
            return <div>
              <ul>
                <li>{data.article.title}</li>
                <li>{data.article.text}</li>
                <li>{data.article.author}</li>
                <li>{data.article.views}</li>
              </ul>
            </div>
          }}
        </Query>
      </div>
    );
  }
}

export default Detail;