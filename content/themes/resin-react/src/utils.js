const MarkdownIt = require('markdown-it')
const md = new MarkdownIt();

const markdown = (source) => {
  return md.render(source);
}

export { markdown }
