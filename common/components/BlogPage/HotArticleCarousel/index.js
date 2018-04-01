import React from 'react';
import CarouselItem from './CarouselItem';
import './style.scss';

const items = [
  {
    articleId: 1,
    title: 'This is title',
    url: 'https://www.google.com',
    coverImage: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/system%2Fbackground.jpg?alt=media&token=b8671014-35f4-46b9-903c-20f96c80fef8',
    content: 'This is content',
  },
  {
    articleId: 2,
    title: 'This is title 2',
    url: 'https://www.google.com',
    coverImage: '',
    content: 'This is content 2',
  },
  {
    articleId: 3,
    title: 'This is title 3',
    url: 'https://www.google.com',
    coverImage: 'http://example.png 3',
    content: 'This is content 3',
  },
];

const HotArticleCarousel = () => (
  <section id="hot-article-carousel">
    {
      items.map(item => (
        <CarouselItem
          key={item.articleId}
          title={item.title}
          url={item.url}
          content={item.content}
          coverImage={item.coverImage}
        />
      ))
    }
  </section>
);

export default HotArticleCarousel;
