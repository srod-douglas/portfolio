import { styled } from '@stitches/react';
import dots from '@/public/static/img/background/dots.svg';

export const AboutArea = styled('section', {
  padding: '$section 0',
  backgroundColor: '$grey0',
  backgroundImage: `url(${dots})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top 11rem',
  borderBottom: '2px solid $brand2',
  height: '100vh',
  '@tablet': {
    backgroundPosition: 'right top 8rem',
    padding: '$sectionMobile 0',
  },
});

export const ContainerAbout = styled('div', {
  maxWidth: '$container',
  margin: '0 auto',
  padding: '0 1rem',
  '@tablet': {
    flexDirection: 'column',
    maxWidth: '$containerTablet',
  },
});

export const AboutContent = styled('div', {
  width: '100%',
  display: 'flex',
});

export const AboutTextArea = styled('div', {
  display: 'flex',
})
