import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

const renderTags = (tags) => {
  if (!_.isEmpty(tags)) {
    return tags.map((tag, i) => {
      return (
        <span key={tag.slug}>
          {i === 0 && ' on '}
          {Boolean(i) && ', '}
          <Link to={`/tag/${tag.slug}`}>{tag.name}</Link>
        </span>
      );
    });
  }
};

const Tags = (props) => {
  return (
    <span>
      {renderTags(props.tags)}
    </span>
  );
};

export default Tags;
