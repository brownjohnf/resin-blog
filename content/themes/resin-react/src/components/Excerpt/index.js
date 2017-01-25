import React, { Component } from 'react';
import excerpts from 'excerpts';

const getExcerpt = (html) => {
  return excerpts(html, {
    words:   50, // Set to false to get html code
    append: '...', // Amount of characters that the excerpt should contain
  })
}

const Excerpt = (props) => {
  return <p>{excerpts(props.html)}</p>;
}

export default Excerpt
