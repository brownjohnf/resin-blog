const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const excerpts = require('excerpts');

const markdown = (source) => {
  return md.render(source);
}

const getExcerpt = (html) => {
  return excerpts(html, {
    words:   50, // Set to false to get html code
    append: '...', // Amount of characters that the excerpt should contain
  })
}

export { markdown, getExcerpt }
