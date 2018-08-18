import React from 'react';
import ArticleCard from '../../ArticleCard';
import './style.scss';

const contentList = [
  {
    url: '/intro',
    content: 'This is a demo content',
    title: 'demo',
    coverImage: 'https://react-etc.net/files/2018-01/next-nuxt.png',
  },
  {
    url: '/intro',
    content: 'This is a demo content 2',
    title: 'demo',
    coverImage: '',
  },
];

export default () => (
  <section id="article-area">
    {
      contentList.map(item => (
        <ArticleCard
          key={item.content}
          title={item.title}
          url={item.url}
          content={item.content}
          coverImage={item.coverImage}
        />
      ))
    }
  </section>
);
