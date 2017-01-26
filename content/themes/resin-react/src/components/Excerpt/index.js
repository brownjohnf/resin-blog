import React from 'react';
import excerpts from 'excerpts';

const getExcerpt = (html) => {
  return excerpts(html, {
    words: 50,
    append: '...'
  });
};

const Excerpt = (props) => {
  return <p>{getExcerpt(props.html)}</p>;
};

export default Excerpt;
