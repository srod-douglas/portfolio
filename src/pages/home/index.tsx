// Styles
import { Container } from '@/styles/Global';
import { Text } from '@/styles/Text';
import { useEffect, useState } from 'react'

// Components
import { Project } from '@/components/Project';
import { Contacts } from '@/components/Contacts';

// Data
import { userData } from '@/utils/userData';
import intro from '@/assets/video/intro.mp4';

// Page Style
import {
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  ContainerVideo,
  VideoDesktop,
  VideoMobile,
} from './style';
import { AboutArea, ContainerAbout } from '@/styles/About';

import { Techs } from '@/components/Techs';
import { About } from '@/components/About';
import introMobile from '@/assets/video/introMobile.mp4'

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;

  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia('(max-width: 510px)').matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia('(max-width: 555px)').matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <main id='home'>
      <ContainerVideo>
          {isSmallScreen ? (
            <VideoMobile src={introMobile} autoPlay loop muted />
          ) : (
            <VideoDesktop src={intro} autoPlay loop muted />
          )}

      </ContainerVideo>

      <section id='about'>
        <AboutArea>
          <ContainerAbout>
            <About />
          </ContainerAbout>
        </AboutArea>
      </section>

      <section id='techs'>
        <ProjectsArea>
          <Container>
            <Techs />
          </Container>
        </ProjectsArea>
      </section>

      <section id='projects'>
        <ProjectsArea>
          <Container>
            <ProjectAreaWrapperColumns>
              <ProjectsAreaSocialMediaMessage>
                <Text as='h1' type='heading1' color='grey5'>
                  Projetos
                </Text>
                <Text as='p' type='body1' color='grey2'>
                  Fique a vontade para visitar os repositórios!
                </Text>
              </ProjectsAreaSocialMediaMessage>
              <ProjectsAreaContent>
                <Project />
              </ProjectsAreaContent>
            </ProjectAreaWrapperColumns>
          </Container>
        </ProjectsArea>
      </section>
      <Contacts />
    </main>
  );
};
