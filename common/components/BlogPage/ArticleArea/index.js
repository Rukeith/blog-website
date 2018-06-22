import React from 'react';
import ArticleCard from './ArticleCard';
import './style.scss';

const demo = [
  {
    articleId: '123',
    title: '1234',
    begins: `   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    coverImage: 'https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/system%2Fbackground.jpg?alt=media&token=b8671014-35f4-46b9-903c-20f96c80fef8',
  },
  {
    articleId: '123',
    title: '1234',
    begins: 'dddzxcv qwe wef 1q 3d',
  },
];

const ArticleArea = () => (
  <section id="article-area">
  {
    demo.map(card => (
      <ArticleCard
        articleId={card.articleId}
        title={card.title}
        begins={card.begins}
        coverImage={card.coverImage}
      />
    ))
  }
  </section>
);

export default ArticleArea;
