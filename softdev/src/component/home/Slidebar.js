import React from 'react';
import { UncontrolledCarousel,Media } from 'reactstrap';

const items = [
  {
    src: 'https://sv1.picz.in.th/images/2019/11/18/gVlsNS.jpg' ,
    altText: '',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: 'https://sv1.picz.in.th/images/2019/11/18/gVooCz.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: 'https://sv1.picz.in.th/images/2019/11/18/gVonHP.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '3'
  }
];

const Slidebar = () => <UncontrolledCarousel items={items} />;

export default Slidebar;
