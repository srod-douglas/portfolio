import { Text } from '@/styles/Text';
import { AboutContent, AboutTextArea } from '@/styles/About';

export const About = () => {
  return (
    <>
      <AboutContent>
        <Text as='h1' type='heading1' color='grey5'>
          Quem sou eu
          <Text as='span' type='heading1' color='brand1'>
            ?
          </Text>
        </Text>
      </AboutContent>
      <AboutTextArea>
        <Text as='span' type='body1' color='grey5'>
          Meu nome é Douglas Rodrigues, muito prazer! <br />
          Tenho 28 anos e sou natural de Porto Alegre - RS, mas atualmente
          resido em Santa Cruz do Sul - RS. <br />
          Muito curioso e dedicado desde pequeno, a tecnologia em sua essência
          sempre me despertou interesse, e essa curiosidade me trouxe à
          programação. <br />
          Hoje sou Desenvolvedor FullStack em formação pela Kenzie Academy
          Brasil, e estou no módulo final, unindo os conhecimentos avançados
          sobre Front-End e Back-End.
        </Text>
      </AboutTextArea>
    </>
  );
};
