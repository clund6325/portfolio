// import postgresqlIcon from '@iconify/icons-logos/postgresql';
// import html5 from '@iconify/icons-logos/html-5';
// import reactIcon from '@iconify/icons-logos/react';
// import languageRubyOnRails from '@iconify/icons-mdi/language-ruby-on-rails';
// import javascriptIcon from '@iconify/icons-logos/javascript';
// import sassIcon from '@iconify/icons-logos/sass';
// import { Icon } from '@iconify/react';
// // import cSharp from '@iconify/icons-logos/c-sharp';
// import wordpressIcon from '@iconify/icons-mdi/wordpress';
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiRails } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

const skills = [
  {
    id: 1, 
    language: "HTML5",
    icon: FaHtml5,
  },
  {
    id: 2, 
    language: "SASS",
    icon: FaSass,
  },
  {
    id: 3, 
    language: "React.js",
    icon: FaReact,
  },

  {
    id: 4, 
    language: "C#",
    icon: SiCsharp,
  },
  {
    id: 5, 
    language: "Git/GitHub",
    icon: FaGithub,
  },
  {
    id: 6, 
    language: "JavaScript",
    icon: SiJavascript,
  },
  {
    id: 7, 
    language: "Ruby On Rails",
    icon: SiRails,
  },

  {
    id: 8, 
    language: "PostgreSQL",
    icon: SiPostgresql,

  },
  {
    id: 9, 
    language: "WordPress",
    icon: FaWordpress,

  },
 
];

export default skills;