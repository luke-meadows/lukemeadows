import ContactForm from '../contact/ContactForm';
import Heading from '../Heading';
import Hero from '../Hero';
import Container from '../main/Container';
import PageTransitionDiv from '../main/PageTransitionDiv';
export default function Contact() {
  return (
    <PageTransitionDiv>
      <Hero bg="almond" chevron="black">
        <Heading color="black">contact.</Heading>
      </Hero>
      <Container bg="black" color="white">
        <ContactForm />
      </Container>
    </PageTransitionDiv>
  );
}
