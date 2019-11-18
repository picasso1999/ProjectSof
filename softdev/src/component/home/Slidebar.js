import React from 'react';
import { UncontrolledCarousel,Media } from 'reactstrap';

const items = [
  {
    src: 'https://sv1.picz.in.th/images/2019/11/18/gVlsNS.jpg' ,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'https://sv1.picz.in.th/images/2019/11/18/gVooCz.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'https://sv1.picz.in.th/images/2019/11/18/gVonHP.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Slidebar = () => <UncontrolledCarousel items={items} />;

export default Slidebar;
