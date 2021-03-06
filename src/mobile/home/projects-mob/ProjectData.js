import postgresqlIcon from '@iconify/icons-logos/postgresql';
import html5 from '@iconify/icons-logos/html-5';
import reactIcon from '@iconify/icons-logos/react';
import languageRubyOnRails from '@iconify/icons-mdi/language-ruby-on-rails';
import javascriptIcon from '@iconify/icons-logos/javascript';
import githubIcon from '@iconify/icons-logos/github-icon';
import sassIcon from '@iconify/icons-logos/sass';
import cSharp from '@iconify/icons-logos/c-sharp';
import wordpressIcon from '@iconify/icons-mdi/wordpress';





const projectData = [
  {
    id: 1,
    name: 'Lab Notes',
    website: 'https://github.com/clund6325/lab-notes',
    about: 'Lab Notes is a transformative and exciting student organization system created with the tech-savvy student in mind. It revolutionizes student success by implementing agile principles in an easy to to use platform. Although it was created with the bootcamp student in mind, its utility extends to anyone that has the drive to make goals and track them.',
    image: "https://res.cloudinary.com/dz7yojyef/image/upload/v1628189033/portfolio/Screen_Shot_2021-08-05_at_12.43.09_PM_idnh3w.png",
    github: 'https://github.com/clund6325/lab-notes',
    icons: [ reactIcon, languageRubyOnRails, javascriptIcon, postgresqlIcon ]
    
  },
  {
    id: 2,
    name: "What's For Dinner?",
    website: 'https://github.com/clund6325/whats4dinner',
    about: "Still a work in progress full-stack application. What's For Dinner? is an easy way to plan your meals for the coming week. With the push of a button, a randomized menu will auto-populate with your favorite recipes. ",
    image: 'https://res.cloudinary.com/dz7yojyef/image/upload/v1628189272/portfolio/Screen_Shot_2021-08-05_at_12.47.16_PM_o2pdxc.png',
    github: 'https://github.com/clund6325/whats4dinner',
    icons: [ reactIcon, languageRubyOnRails, javascriptIcon, postgresqlIcon ]
  },
];

export default projectData;