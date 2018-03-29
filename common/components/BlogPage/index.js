import React from 'react';
import HotArticleCarousel from './HotArticleCarousel';
import ArticleArea from './ArticleArea';
import SideBar from '../SideBar';
import './style.scss';

const BlogPage = () => (
  <main id="blog-page">
    <HotArticleCarousel />
    <ArticleArea />
    <SideBar />
  </main>
);

export default BlogPage;
