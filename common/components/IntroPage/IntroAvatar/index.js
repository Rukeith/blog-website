import React from 'react';
import './style.scss';

const socialLinkList = [
  {
    alt: 'github',
    link: 'https://github.com/rukeith',
    icon: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Fgithub-square.svg?alt=media&token=223f72b3-25fa-421a-ba74-06fed4daa45a',
  },
  {
    alt: 'linkedin',
    link: 'https://linkedin.com/in/rukeith',
    icon: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Flinkedin.svg?alt=media&token=4350fed4-1739-4aa9-8c6b-cf8a8ce2648f',
  },
  {
    alt: 'facebook',
    link: 'https://github.com/rukeith',
    icon: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Ffacebook-square.svg?alt=media&token=76782b32-7347-4926-a5d7-e18a42d0b81a',
  },
  {
    alt: 'twitter',
    link: 'https://github.com/rukeith',
    icon: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Ftwitter-square.svg?alt=media&token=08b43b4c-ce23-4cab-bb17-dd5be551ade0',
  },
  {
    alt: 'google-plus',
    link: 'https://github.com/rukeith',
    icon: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Fgoogle-plus-square.svg?alt=media&token=c538780e-83b7-4956-9efa-3ff70cc39edf',
  },
  {
    alt: 'mail',
    link: 'https://github.com/rukeith',
    icon: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Fenvelope.svg?alt=media&token=47eeba22-58f9-416d-821b-0c9d0e15b1d1',
  },
];

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
    <div className="social-link">
      {
        socialLinkList.map(data => (
          <a className={`avatar-social-link ${data.alt}`} href={data.link} key={data.alt}>
            <img alt={`${data.alt}-link`} src={data.icon} />
          </a>
        ))
      }
    </div>
  </div>
);

export default IntroAvatar;
