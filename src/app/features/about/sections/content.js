import PinhomeLogo from '@/icons/pinhome-512.png';
import BPRLogo from '@/icons/logo-bpr.png';
import htmlIcon from '@/icons/logos_html-5.png';
import javascriptIcon from '@/icons/devicon_javascript.png';
import pythonIcon from '@/icons/logos_python.png';
import reactIcon from '@/icons/logos_react.png';
import cssIcon from '@/icons/logos_css-3.png';
import nextIcon from '@/icons/nonicons_next-16.png';
import expressIcon from '@/icons/simple-icons_express.png';

let experiences = [
  {
    startDate: 'May 2022',
    endDate: 'Aug 2022',
    position: 'Frontend Engineer Intern',
    logo: PinhomeLogo,
    company: 'Pinhome',
    skills: [
      'Jest Unit',
      'Javascript',
      'ReactJS',
      'NextJS',
      'Jira',
      'Redux.js',
    ],
  },
  {
    startDate: 'Jan 2022',
    endDate: 'Apr 2022',
    position: 'Full-stack Developer',
    logo: BPRLogo,
    company: 'Bank UMKM Jawa Timur',
    skills: ['ReactJS', 'Laravel', 'UI/UX', 'Research UX', 'Figma', 'PHP'],
  },
];

let techStacks = [
  {
    name: 'HTML5',
    icon: htmlIcon,
  },
  {
    name: 'CSS',
    icon: cssIcon,
  },
  {
    name: 'Javascript',
    icon: javascriptIcon,
  },
  {
    name: 'Python',
    icon: pythonIcon,
  },
  {
    name: 'ReactJS',
    icon: reactIcon,
  },
  {
    name: 'NextJS',
    icon: nextIcon,
  },
  {
    name: 'ExpressJS',
    icon: expressIcon,
  },
];

export { experiences, techStacks };
