import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class AddViewToArticle extends Component {
  onClick() {
    this.props.mutate({
      variables: { id: this.props.id }
    })
      .then(({ data }) => {

      }).catch((error) => {

      });
  }

  render() {
    return <div onClick={this.onClick.bind(this)}>{this.props.children}</div>;
  }
}

const addView = gql`
  mutation addViewToArticle($id: Int) {
    addViewToArticle(id: $id) {
      id,
      views
    }
  }
`;

const AddViewToArticleWithData = graphql(addView)(AddViewToArticle);

export default AddViewToArticleWithData;