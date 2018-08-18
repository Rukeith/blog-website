import React from 'react';
import SkillBar from './SkillBar';
import './style.scss';

const skills = [
  {
    skill: 'Programming',
    details: 'JavaScript, Nodejs, Python3, Golang',
  },
  {
    skill: 'Front End',
    details: 'HTML, CSS, Sass, Pug, jQuery, React, AngularJS',
  },
  {
    skill: 'Platform',
    details: 'AWS, GCP, Heroku, Parse, LeanCloud',
  },
  {
    skill: 'Database',
    details: 'MySQL, MongoDB, Redis, PostgreSQL',
  },
  {
    skill: 'DevOps',
    details: 'Jenkins, Gitlab CI, Bitbucket pipeline, Docker, Kubernetes',
  },
  {
    skill: 'Marketing',
    details: 'Facebook Marketing, AdWords, Google analytics, SEO',
  },
];

export default () => (
  <div className="intro-page-skill">
    {
      skills.map(value => (
        <SkillBar
          skill={value.skill}
          details={value.details}
          key={value.skill.toLowerCase()}
        />
      ))
    }
  </div>
);
