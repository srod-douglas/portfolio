import { Container } from '@/styles/Global';
import { Text } from '@/styles/Text';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from './style';

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from 'react-icons/fa';
import { useRef } from 'react';
import { userData } from '@/utils/userData';

export const Contacts = () => {
  const ref = useRef(null);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <ContactSection id='contact'>
      <Container>
        <ContactSectionContent ref={ref}>
          <motion.div style={{ scale }}>
            <ContactSectionText>
              <Text type='heading2' color='grey4'>
                Vamos conversar <br/> e {' '}
                  <Text as='span' type='heading2' color='brand1'>
                     desenvolver soluções {' '}
                  </Text>
                para a sua empresa, {' '}
                  <Text as='span' type='heading2' color='brand1'>
                    juntos!
                  </Text>
              </Text>
            </ContactSectionText>
          </motion.div>
          <ContactsCards>
            <ContactCard>
              <ContactCardImage className='wpp'>
                <FaWhatsapp color='#fff' size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type='heading4' color='grey4'>
                  Whatsapp
                </Text>
                <Text color='grey2' type='body2'>
                  Vamos conversar sobre criatividade?
                </Text>
                <Text
                  as='a'
                  color='grey2'
                  type='body2'
                  target='_blank'
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%c3%a1%2c+Douglas!+Venho+atrav%c3%a9s+do+seu+portf%c3%b3lio+na+internet+e+gostaria+de+conversar+com+voc%c3%aa!`}
                >
                  Vamos!
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className='email'>
                <FaEnvelopeOpen color='#fff' size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type='heading4' color='grey4'>
                  E-mail
                </Text>
                <Text color='grey2' type='body2'>
                  Envie-me um e-mail com feedbacks, sugestões e ideias!
                </Text>

                <Text
                  as='a'
                  color='grey2'
                  type='body2'
                  target='_blank'
                  href={`mailto=${userData.emailUser}`}
                  onClick={() =>
                    (window.location.href = 'mailto:srod.douglas@gmail.com')
                  }
                >
                  Enviar e-mail
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className='linkedin'>
                <FaLinkedin color='#fff' size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type='heading4' color='grey4'>
                  LinkedIn
                </Text>
                <Text color='grey2' type='body2'>
                  As SoftSkills são tão importantes quanto às HardSkills. Vamos aprimorar nossas habilidades? 
                </Text>
                <Text
                  as='a'
                  color='grey2'
                  type='body2'
                  target='_blank'
                  href={linkedInUrl}
                >
                  Vamos!
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
