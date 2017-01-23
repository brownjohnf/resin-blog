import React, { Component } from 'react'

class Tags extends Component {
  renderTags(tags) {
    if (tags) {
      tags.map((tag) => {
        return <label>{tag}</label>
      })
    }
  }

  render() {
    return (
      <div>{this.renderTags(this.props.tags)}</div>
    )
  }
}

export default Tags;
