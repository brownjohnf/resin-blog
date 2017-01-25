import React, { Component } from 'react';
import { Link } from 'react-router';

class Pagination extends Component {
  render() {
    return (
      <div>
        <Link
          style={this.props.prev ? null : {pointerEvents: "none"}}
          to={this.props.path + this.props.prev}>
          Prev
        </Link>
        <span>{this.props.page} of {this.props.pages}</span>
        <Link
          style={this.props.next ? null : {pointerEvents: "none"}}
          to={this.props.path + this.props.next}>
          Next
        </Link>
      </div>
    )
  }
}

export default Pagination;
