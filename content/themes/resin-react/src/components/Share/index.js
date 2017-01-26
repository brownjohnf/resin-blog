import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import styles from './style.css';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');

const Share = (props) => {
  return (
    <div>
        <h4 className={styles.title}>{props.title}</h4>
        <FacebookShareButton className={styles.button} url={props.url}>
          <FacebookIcon
            size={32}
            round />
        </FacebookShareButton>
        <GooglePlusShareButton className={styles.button} url={props.url}>
          <GooglePlusIcon
            size={32}
            round />
        </GooglePlusShareButton>
        <TwitterShareButton className={styles.button} url={props.url}>
          <TwitterIcon
          size={32}
          round />
        </TwitterShareButton>
    </div>
  );
};

Share.defaultProps = {
  url: window ? window.location.href : 'https://resin.io',
  title: 'Share'
};

export default Share;
