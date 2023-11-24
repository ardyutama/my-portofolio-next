import bpr from '@/images/bpr.svg';
import spotify from '@/images/spotify.svg';
import visity from '@/images/visity.png';

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
    description:
      'Booking and Appointment guests and admin using automate fill identity card scanner.',
    photo: visity,
    tech: ['ReactJs', 'TypeScript', 'Laravel', 'Figma', 'PHP'],
    link: 'https://github.com/ardyutama/mailing-bpr',
  },
];

export { projects };
