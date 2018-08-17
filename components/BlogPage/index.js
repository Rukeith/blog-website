import React from 'react';
import ArticleArea from './ArticleArea';
import HotArticleCarousel from './HotArticleCarousel';
import SideBar from '../SideBar';
import './style.scss';

export default () => (
  <main id="blog-page">
    <HotArticleCarousel />
    <ArticleArea />
    <SideBar />
  </main>
);
