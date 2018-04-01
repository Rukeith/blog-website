import React from 'react';
import SocialBar from '../../SocialBar';
import './style.scss';

const IntroAvatar = () => (
  <div className="intro-page-avatar">
    <div className="avatar">
      <img alt="avatar" src="https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/system%2Fuser.svg?alt=media&token=df75b2b2-abfc-44b1-a29b-6a52c7a2c88d" />
    </div>
    <div className="description">
      <ul>
        <li><h1>Rukeith Tseng</h1></li>
        <li>Use JavaScript and Nodejs as profession for years,
          keen to learn new technology. And quite requires my own coding style
          and code quality with CI Test.
        </li>
      </ul>
    </div>
    <SocialBar />
  </div>
);

export default IntroAvatar;
