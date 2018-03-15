import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';


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
        views,
      }}
    `
    const CustomList = styled.ul`
      list-style-type: none;
    `;
    const StyledItem = styled.li`
      color: blue;
      margin: 20px;
    `;
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
              <CustomList>
                <StyledItem>{data.article.title}</StyledItem>
                <StyledItem>{data.article.text}</StyledItem>
                <StyledItem>{data.article.author}</StyledItem>
                <StyledItem>{data.article.views}</StyledItem>
              </CustomList>
            </div>
          }}
        </Query>
      </div>
    );
  }
}

export default Detail;