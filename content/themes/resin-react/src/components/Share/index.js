import React, { Component } from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton
} = ShareButtons

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');

const Share = (props) => {
  const { url } = props
  return (
    <section className="share">
        <h4>Share this post</h4>
        <FacebookShareButton url={url}>
          <FacebookIcon
            size={32}
            round />
        </FacebookShareButton>
        <GooglePlusShareButton url={url}>
          <GooglePlusIcon
            size={32}
            round />
        </GooglePlusShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon
          size={32}
          round />
        </TwitterShareButton>
    </section>
  )
}

export default Share;
