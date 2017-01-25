import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
          <a className="subscribe icon-feed" href={`${this.props.url}/rss/`}><span className="tooltip">Subscribe!</span></a>
          <div className="inner">
               <section className="copyright">All content copyright <a href="/">{this.props.title}</a> &copy; {this.props.copyright} &bull; All rights reserved.</section>
               <section className="poweredby">Proudly published with <a className="icon-ghost" href="http://ghost.org">Ghost</a></section>
          </div>
      </footer>
    )
  }
}

export default Footer;
