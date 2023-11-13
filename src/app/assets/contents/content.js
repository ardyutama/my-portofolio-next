import bpr from '@/images/bpr.svg';
import spotify from '@/images/spotify.svg';

let experiences = [
  {
    startDate: 'Aug 2022',
    endDate: 'Feb 2023',
    position: 'Data Engineer Intern',
    company: 'PT VKTR Indonesia',
    skills: [
      'Python',
      'cantools',
      'Apache Spark',
      'Apache Hadoop',
      'Pyspark',
      'Cassandra',
    ],
  },
  {
    startDate: 'May 2022',
    endDate: 'Aug 2022',
    position: 'Frontend Engineer Intern',
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
    company: 'Bank UMKM Jawa Timur',
    skills: ['ReactJS', 'Laravel', 'UI/UX', 'Research UX', 'Figma', 'PHP'],
  },
];

let projects = [
  {
    name: 'Spotify Playlist Generator',
    description: 'Generate Playlist website using Spotify API.',
    photo: spotify,
    tech: ['ReactJs', 'TypeScript', 'TailwindCSS', 'ReduxJS'],
    link: 'https://spotify-playlist-project.vercel.app',
  },
  {
    name: 'Mailing System',
    description:
      'Digitalize mailing for disposition and approval letter with sign.',
    photo: bpr,
    tech: ['ReactJs', 'TypeScript', 'Laravel', 'Figma', 'PHP'],
    link: 'https://github.com/ardyutama/mailing-bpr',
  },
  {
    name: 'Visity',
    description: 'Booking and Appointment guests and admin using automate fill identity card scanner.'
  }
];

export { experiences, projects };
