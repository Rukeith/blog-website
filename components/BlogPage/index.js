import React from 'react';
import ArticleArea from './ArticleArea';
import HotArticleCarousel from './HotArticleCarousel';
import SideBar from '../SideBar';
import './style.scss';

const year = new Date().getFullYear();
const categories = {
  '03': [
    'article one',
    'article two',
  ],
  '04': [
    'article one',
    'article two',
    'article three',
  ],
};

export default () => (
  <main id="blog-page">
    <HotArticleCarousel />
    <ArticleArea />
    <SideBar year={year} list={categories} />
  </main>
);
