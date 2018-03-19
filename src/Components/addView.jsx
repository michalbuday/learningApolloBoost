import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { GET_ARTICLE } from '../Containers/Detail';

class AddViewToArticle extends Component {
  onClick = () => {
    this.props.mutate({
      variables: { id: this.props.id, views: this.props.views },
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

const AddViewToArticleWithData = graphql(addView, {
  options: (props) => ({
    refetchQueries: [{ query: GET_ARTICLE, variables: { id: props.id } }],
  }),
})(AddViewToArticle);

export default AddViewToArticleWithData;