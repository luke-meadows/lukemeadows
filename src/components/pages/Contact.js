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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quod
          repellat alias optio neque, perferendis accusantium illo aspernatur
          cum, corporis quos quis nobis pariatur doloremque repudiandae eum
          reiciendis. Repudiandae sed nesciunt deleniti maxime dolorum hic
          magnam asperiores autem ratione facere sapiente architecto placeat
          impedit, perspiciatis officiis quia harum ex fuga.
        </p>
      </Container>
    </PageTransitionDiv>
  );
}
