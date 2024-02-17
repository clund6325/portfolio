import postgresqlIcon from '@iconify/icons-logos/postgresql';
import html5 from '@iconify/icons-logos/html-5';
import reactIcon from '@iconify/icons-logos/react';
import languageRubyOnRails from '@iconify/icons-mdi/language-ruby-on-rails';
import javascriptIcon from '@iconify/icons-logos/javascript';
import githubIcon from '@iconify/icons-logos/github-icon';
import sassIcon from '@iconify/icons-logos/sass';
import cSharp from '@iconify/icons-logos/c-sharp';
import wordpressIcon from '@iconify/icons-mdi/wordpress';
// import css3Icon from '@iconify/icons-logos/css-3';
// import sqlIcon from '@iconify/icons-logos/sql';
// import angularIcon from '@iconify/icons-logos/angular-icon';
import { css } from 'styled-components';

const skills = [
  {
    id: 1, 
    language: "Ruby On Rails",
    icon: languageRubyOnRails,
  },
  {
    id: 2, 
    language: "JavaScript",
    icon: javascriptIcon,
  },
  
  {
    id: 3, 
    language: "React.js",
    icon: reactIcon,
  },
  {
    id: 4, 
    language: "C#",
    icon: cSharp,
  },
  {
    id: 5, 
    language: "Git/GitHub",
    icon: githubIcon,
  },
  
  {
    id: 6, 
    language: "HTML5",
    icon: html5,
  },
  {
    id: 7, 
    language: "SASS",
    icon: sassIcon,
  },
  {
    id: 8, 
    language: "PostgreSQL",
    icon: postgresqlIcon,

  },
  {
    id: 9, 
    language: "WordPress",
    icon: wordpressIcon,

  },
  // {
  //   id: 10, 
  //   language: "CSS3",
  //   icon: css3Icon,
  // },
  // {
  //   id: 11, 
  //   language: "SQL",
  //   icon: sqlIcon,
  // },
  // {
  //   id: 12, 
  //   language: "AngularJS",
  //   icon: angularIcon,
  // }
 
];

export default skills;