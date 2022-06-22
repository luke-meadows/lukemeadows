import ContactForm from '../contact/ContactForm';
import Heading from '../Heading';
import Hero from '../Hero';
import Container from '../main/Container';
import Footer from '../main/Footer';
import PageTransitionDiv from '../main/PageTransitionDiv';
export default function Contact() {
  return (
    <PageTransitionDiv>
      <Hero bg="almond" chevron="black">
        <Heading color="black">contact.</Heading>
      </Hero>
      <Container bg="black" color="white">
        <p
          style={{
            color: 'var(--white)',
            maxWidth: '800px',
            margin: ' 0 auto 2rem auto',
            fontSize: '1.5rem',
            fontFamily: 'SpecifyPERSONAL',
            letterSpacing: '1px',
            color: 'var(--white)',
          }}
        >
          Have you got a project or job opportunity you'd like to discuss?
          <span
            style={{
              color: 'var(--almond)',
            }}
          >
            {' '}
            Send me a message!
          </span>
        </p>
        <ContactForm />
      </Container>
      <Footer />
    </PageTransitionDiv>
  );
}
