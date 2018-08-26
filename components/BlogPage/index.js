import React from 'react';
import ArticleArea from '../../containers/ArticleArea';
import HotArticleCarousel from './HotArticleCarousel';
import SideBar from '../../containers/SideBar';
import './style.scss';

export default () => (
  <main id="blog-page">
    <HotArticleCarousel />
    <ArticleArea />
    <SideBar />
  </main>
);
