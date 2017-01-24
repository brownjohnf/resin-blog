const excerpts = require('excerpts');

const getExcerpt = (html) => {
  return excerpts(html, {
    words:   50, // Set to false to get html code
    append: '...', // Amount of characters that the excerpt should contain
  })
}

export { getExcerpt }
