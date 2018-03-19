import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import * as Styled from '../../styledComponents';

import logo from '../../logo.svg';
import './App.css';

export const GET_ARTICLE = gql`
      query Article($id: Int){article(id: $id){
        title,
        text,
        author,
        views,
      }}
    `;

class Detail extends Component {
  render() {

    const { id } = this.props.match.params;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Detail of Article in React</h1>
        </header>
        <Query query={GET_ARTICLE} variables={{ id: id }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;
            if (!data.article) return <div>No article with id:{id}</div>;
            return (
              <div>
                <Styled.CustomList>
                  <Styled.StyledItem>{data.article.title}</Styled.StyledItem>
                  <Styled.StyledItem>{data.article.text}</Styled.StyledItem>
                  <Styled.StyledItem>{data.article.author}</Styled.StyledItem>
                  <Styled.StyledItem>Article Viewed: {data.article.views} times</Styled.StyledItem>
                </Styled.CustomList>
              </div>)
          }}
        </Query>
      </div >
    );
  }
}

export default Detail;