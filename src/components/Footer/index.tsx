import { Container, Flex, Box } from '@/styles/Global';
import { Text } from '@/styles/Text';
import { Footer as FooterWrapper } from './style';
import { UserImage } from '@/pages/home/style';
import { userData } from '@/utils/userData';
import { FaLinkedinIn } from 'react-icons/fa';
import { Button } from '@/styles/Buttons';

export const Footer = (): JSX.Element => {
  const portfolioUrl = `https://github.com/${userData.githubUser}/portfolio`;

  return (
    <FooterWrapper id='social-media'>
      <Container>

        <Flex>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={'70px'}
            height={'70px'}
          />

          <Box css={{ marginLeft: '$2' }}>
            <Text type='heading4' color='grey5' css={{ marginBottom: '$2' }}>
              Obrigado!
            </Text>
            <Text type='body1' color='grey2'>
              Vamos nos conectar no LinkedIn?
            </Text>
          </Box>

        </Flex>

        <Flex
          css={{
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '$2',
          }}
        >            
          <Button as='a' type='outline' target='_blank' href={portfolioUrl}>
            Ver o código fonte do portfólio
          </Button>
          <Button
            className='linkedin'
            type='circle'
            as='a'
            target='_blank'
            href={`https://linkedin.com/in/${userData.linkedinUser}`}
          >
            <FaLinkedinIn />
          </Button>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};
