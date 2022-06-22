import CHSLOGO from '../imgs/project-logos/chs-logo.png';
import CHSPREVIEW from '../imgs/project-previews/CHS-fullscreen.png';
import ABSLOGO from '../imgs/project-logos/abs-logo.png';
import ABSPREVIEW from '../imgs/project-previews/ABS-fullscreen.png';

export const projectsData = {
  chs: {
    title: 'Connected Home Systems',
    text: [
      'This project was completed for a client in the smart home business. Connected Home Systems wanted to inject some energy back into their website with a completely overhauled design which appealed to their high end clientele.',
      'Included in the build is a content management system. The administrator is able to create, edit and delete the content on their website. Blog posts, images and past projects can all be managed through the password protected portal.',
    ],
    deliverables: ['Design', 'Development', 'CMS'],
    urls: {
      code: 'https://github.com/luke-meadows/connected-home-systems',
      site: 'https://www.connectedhomesystems.co.uk',
    },
    logo: CHSLOGO,
    preview: CHSPREVIEW,
  },
  abs: {
    title: 'Above and Beyond Solutions',
    text: [
      'This project was completed for a client in the smart home business. Connected Home Systems wanted to inject some energy back into their website with a completely overhauled design which appealed to their high end clientele.',
      'Included in the build is a content management system. The administrator is able to create, edit and delete the content on the website. Blog posts, images and past projects can all be managed through the password protected portal.',
    ],
    deliverables: ['Design', 'Development', 'CMS'],
    urls: {
      code: 'https://github.com/luke-meadows/above-and-beyond-solutions',
      site: 'https://www.aboveandbeyondsolutions.co.uk/',
    },
    logo: ABSLOGO,
    preview: ABSPREVIEW,
  },
};
