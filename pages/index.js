import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Header from '../components/Header';

const Index = (props) => (
  <div>
    <Header />
    <Link prefetch href="/intro?title=kk" pathname="/intro">
      <button>Intro Page</button>
    </Link>
    <p>Hello Next.js</p>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

Index.getInitialProps = async () => {
  const { data } = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  }
};

export default Index;
