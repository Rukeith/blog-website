import React from 'react';
import Link from 'next/link';
import './style.scss';

const socialLinkList = [
  {
    symbol: 'github',
    alt: 'follow me at github',
    link: 'https://github.com/rukeith',
    icon: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Fgithub-square.svg?alt=media&token=223f72b3-25fa-421a-ba74-06fed4daa45a',
  },
  {
    symbol: 'linkedin',
    alt: 'follow me at linkedin',
    link: 'https://linkedin.com/in/rukeith',
    icon: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Flinkedin.svg?alt=media&token=4350fed4-1739-4aa9-8c6b-cf8a8ce2648f',
  },
  {
    symbol: 'facebook',
    alt: 'follow me at facebook',
    link: 'https://github.com/rukeith',
    icon: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Ffacebook-square.svg?alt=media&token=76782b32-7347-4926-a5d7-e18a42d0b81a',
  },
  {
    symbol: 'twitter',
    alt: 'follow me at twitter',
    link: 'https://github.com/rukeith',
    icon: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Ftwitter-square.svg?alt=media&token=08b43b4c-ce23-4cab-bb17-dd5be551ade0',
  },
  {
    symbol: 'google-plus',
    alt: 'follow me at google plus',
    link: 'https://github.com/rukeith',
    icon: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Fgoogle-plus-square.svg?alt=media&token=c538780e-83b7-4956-9efa-3ff70cc39edf',
  },
  {
    symbol: 'mail',
    alt: 'send me a mail',
    link: 'https://github.com/rukeith',
    icon: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Fenvelope.svg?alt=media&token=47eeba22-58f9-416d-821b-0c9d0e15b1d1',
  },
];

export default () => (
  <div className="social-bar">
    {
      socialLinkList.map(data => (
        <Link prefetch href={data.link}>
          <a className={`social-link ${data.symbol}`} href={data.link} key={data.symbol} target="_blank" rel="noopener noreferrer">
            <img alt={data.alt} src={data.icon} />
          </a>
        </Link>
      ))
    }
  </div>
);
