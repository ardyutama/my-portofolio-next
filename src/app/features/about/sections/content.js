import PinhomeLogo from '@/icons/pinhome-512.png';
import BPRLogo from '@/icons/logo-bpr.png';
import htmlIcon from '@/icons/html5.svg';
import javascriptIcon from '@/icons/javascript.svg';
import pythonIcon from '@/icons/python.svg';
import reactIcon from '@/icons/react.svg';
import cssIcon from '@/icons/css.svg';

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
    name: 'Javascript',
    icon: javascriptIcon,
  },
  {
    name: 'Python',
    icon: pythonIcon,
  },
  {
    name: 'React.JS',
    icon: reactIcon,
  },
  {
    name: 'CSS',
    icon: cssIcon,
  },
];

export { experiences, techStacks };
