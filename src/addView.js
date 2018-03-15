import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { GET_ARTICLE } from './Detail';

class AddViewToArticle extends Component {
  onClick = () => {
    console.log(this.props.views);
    this.props.mutate({
      variables: { id: this.props.id, views: this.props.views },
      refetchQueries: [{ query: GET_ARTICLE, variables: { id: this.props.id } }],
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
  mutation addViewToArticle($id: Int, $views: Int) {
    addViewToArticle(id: $id, views: $views) {
      id,
      views
    }
  }
`;

const AddViewToArticleWithData = graphql(addView)(AddViewToArticle);

export default AddViewToArticleWithData;