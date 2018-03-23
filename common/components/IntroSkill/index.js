import React from 'react';
import SkillBar from '../SkillBar/';
import './style.scss';

const skills = [
  {
    skill: 'Programming',
    details: 'JavaScript, Nodejs, Python, Golang',
  },
  {
    skill: 'Front End',
    details: 'jQuery, React, AngularJS',
  },
  {
    skill: 'Server',
    details: 'AWS, GCP, Heroku, Parse, LeanCloud',
  },
  {
    skill: 'Database',
    details: 'MySQL, MongoDB, Redis, PostgreSQL',
  },
  {
    skill: 'DevOps',
    details: 'Jenkins, Gitlab CI, Bitbucket pipeline, Docker',
  },
  {
    skill: 'Marketing',
    details: 'Facebook Marketing, AdWords, Google analytics, SEO',
  },
];

const IntroSkill = () => (
  <div className="intro-page-skill">
    { skills.map(value => <SkillBar skill={value.skill} details={value.details} key={value.skill.toLowerCase()} />) }
  </div>
);

export default IntroSkill;
