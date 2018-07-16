import React from 'react';
import Link from 'next/link';
import '../styles/style.scss';

export default () => (
  <div className='example'>
    <ul>
      <li><Link href='/b' as='/a'><a>a</a></Link></li>
      <li><Link href='/a' as='/b'><a>b</a></Link></li>
    </ul>
  </div>
)