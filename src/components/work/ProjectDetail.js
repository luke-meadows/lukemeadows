import styled from 'styled-components';
import { motion } from 'framer-motion';
import SmoothScroll from '../../lib/SmoothScroll.component';
export default function ProjectDetail({ toggleProjectView }) {
  return (
    <Container
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.5 }}
      style={{
        top: window.scrollY,
      }}
    >
      <Inner>
        <BackButton onClick={toggleProjectView}>
          <i className="icon-left-open-big" />
          Back to projects
        </BackButton>
        <p
          style={{
            color: 'var(--black)',
            zIndex: '10',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
          necessitatibus rerum voluptatibus expedita, facere veniam facilis
          quidem id. Quas necessitatibus iusto maiores reiciendis dolorum beatae
          cupiditate incidunt at, rem aperiam distinctio odit doloribus expedita
          sequi laborum atque voluptatem laboriosam autem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Iure voluptatibus fugit nemo maxime
          laudantium sit? Veniam, unde consequatur. Facere reiciendis autem id
          possimus voluptas consectetur unde, nemo sint quaerat velit. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ratione
          quaerat error aut quae dolores quas aspernatur veniam eligendi, optio
          enim accusantium explicabo atque amet quo molestias nulla, earum natus
          ad repudiandae ipsum cupiditate maiores. Repellendus nihil incidunt
          aliquam vitae iure fugit ducimus eaque consectetur iusto natus ipsam,
          porro distinctio numquam libero dolores sequi qui magni obcaecati
          facere, molestiae adipisci, voluptatem officiis quisquam tempora.
          Vitae nesciunt, temporibus suscipit voluptatibus tempore, ipsum
          repellat aliquam, quam et nam rerum eum deleniti quae cumque magnam
          doloremque? Delectus dolor error quasi et alias doloribus voluptates,
          excepturi voluptatum veritatis eaque quas provident corporis, rem ea
          animi! Nostrum quasi placeat id asperiores blanditiis vitae temporibus
          reprehenderit saepe aliquid totam, veritatis quisquam unde amet vero
          at eum quibusdam aperiam necessitatibus natus velit accusamus? Eos,
          nemo. Aperiam ratione deleniti, cum nulla perspiciatis, quam quisquam
          a rem pariatur ab, minima iusto. Delectus nostrum, temporibus autem
          impedit voluptates quos provident id cum asperiores voluptatem
          inventore sit vel ut quasi, ab eos non. Quidem harum et officiis quia
          reiciendis, tenetur, beatae quas hic mollitia perspiciatis a excepturi
          molestias! Alias illum commodi fugit sint eius officia soluta deleniti
          fugiat omnis neque! Explicabo neque quasi esse temporibus quas,
          distinctio saepe, impedit blanditiis inventore rem provident quo iure
          ea? Hic nam quo reprehenderit commodi eligendi nostrum aperiam
          ratione, autem excepturi temporibus, ullam officia architecto esse.
          Repudiandae iste necessitatibus dolorum laborum voluptas! Saepe, id
          sit. Dolorum molestias ab quia eos debitis sint mollitia soluta magni
          a! Iure expedita animi nemo molestias voluptatum asperiores officia
          fuga enim provident eveniet exercitationem saepe numquam vitae
          molestiae, voluptate ducimus deserunt adipisci. Eaque eum aliquam
          deleniti eligendi excepturi fuga, iusto veniam omnis quasi id, facere
          eos dolorem temporibus natus quas unde! Dolorum voluptatibus nemo
          quasi quas tempore. Quia amet doloribus exercitationem, voluptatum
          ipsam nesciunt qui autem velit earum ducimus deserunt repudiandae, sit
          cupiditate placeat quas illum necessitatibus magnam aperiam harum a ut
          dicta? Facere esse molestias assumenda fugit repellendus. Iusto
          excepturi nobis sed magni minima, quia, nihil obcaecati soluta non
          expedita nostrum dolores quos enim praesentium consequuntur dolore
          similique voluptas. Natus ab, dolores alias quaerat nemo blanditiis
          perferendis vero ex. Laboriosam quas atque quae esse impedit quos sed
          distinctio! Sed est labore libero molestiae voluptates sapiente
          voluptate deleniti omnis, iste ducimus quisquam cum temporibus nihil
          amet, incidunt exercitationem esse harum, quaerat blanditiis? Atque
          quaerat, vel excepturi odio dicta totam necessitatibus expedita
          nesciunt! Eveniet voluptas tenetur quam, mollitia ut, labore non cum
          sint expedita possimus libero accusamus at distinctio! Odit, animi.
          Tempora, repudiandae animi et sed quos minus sunt officia iure unde
          laudantium labore quis quidem ex consequuntur harum commodi cupiditate
          recusandae atque nihil eligendi numquam sit ipsam facilis. Possimus
          omnis aperiam dolorem iusto illum. Nulla quasi reprehenderit
          dignissimos facere sunt quibusdam sed corrupti numquam blanditiis
          esse, autem quaerat temporibus perspiciatis eius nisi ullam voluptates
          quos? Earum consectetur ullam dolor numquam delectus, perferendis
          possimus animi dolorum sit accusantium ratione. Explicabo tempore
          accusamus saepe dolorem ullam libero quia sunt officiis in
          necessitatibus? Repellendus nobis corporis nam cumque ab, obcaecati
          excepturi quisquam facilis? quaerat, vel excepturi odio dicta totam
          necessitatibus expedita nesciunt! Eveniet voluptas tenetur quam,
          mollitia ut, labore non cum sint expedita possimus libero accusamus at
          distinctio! Odit, animi. Tempora, repudiandae animi et sed quos minus
          sunt officia iure unde laudantium labore quis quidem ex consequuntur
          harum commodi cupiditate recusandae atque nihil eligendi numquam sit
          ipsam facilis. Possimus omnis aperiam dolorem iusto illum. Nulla quasi
          reprehenderit dignissimos facere sunt quibusdam sed corrupti numquam
          blanditiis esse, autem quaerat temporibus perspiciatis eius nisi ullam
          voluptates quos? Earum consectetur ullam dolor numquam delectus,
          perferendis possimus animi dolorum sit accusantium ratione. Explicabo
          tempore accusamus saepe dolorem ullam libero quia sunt officiis in
          necessitatibus? Repellendus nobis corporis nam cumque ab, obcaecati
          excepturi quisquam facilis? quaerat, vel excepturi odio dicta totam
          necessitatibus expedita nesciunt! Eveniet voluptas tenetur quam,
          mollitia ut, labore non cum sint expedita possimus libero accusamus at
          distinctio! Odit, animi. Tempora, repudiandae animi et sed quos minus
          sunt officia iure unde laudantium labore quis quidem ex consequuntur
          harum commodi cupiditate recusandae atque nihil eligendi numquam sit
          ipsam facilis. Possimus omnis aperiam dolorem iusto illum. Nulla quasi
          reprehenderit dignissimos facere sunt quibusdam sed corrupti numquam
          blanditiis esse, autem quaerat temporibus perspiciatis eius nisi ullam
          voluptates quos? Earum consectetur ullam dolor numquam delectus,
          perferendis possimus animi dolorum sit accusantium ratione. Explicabo
          tempore accusamus saepe dolorem ullam libero quia sunt officiis in
          necessitatibus? Repellendus nobis corporis nam cumque ab, obcaecati
          excepturi quisquam facilis? quaerat, vel excepturi odio dicta totam
          necessitatibus expedita nesciunt! Eveniet voluptas tenetur quam,
          mollitia ut, labore non cum sint expedita possimus libero accusamus at
          distinctio! Odit, animi. Tempora, repudiandae animi et sed quos minus
          sunt officia iure unde laudantium labore quis quidem ex consequuntur
          harum commodi cupiditate recusandae atque nihil eligendi numquam sit
          ipsam facilis. Possimus omnis aperiam dolorem iusto illum. Nulla quasi
          reprehenderit dignissimos facere sunt quibusdam sed corrupti numquam
          blanditiis esse, autem quaerat temporibus perspiciatis eius nisi ullam
          voluptates quos? Earum consectetur ullam dolor numquam delectus,
          perferendis possimus animi dolorum sit accusantium ratione. Explicabo
          tempore accusamus saepe dolorem ullam libero quia sunt officiis in
          necessitatibus? Repellendus nobis corporis nam cumque ab, obcaecati
          excepturi quisquam facilis?
        </p>
      </Inner>
    </Container>
  );
}

const Inner = styled(motion.section)`
  position: relative;
  overflow-y: scroll;
  height: 100vh;
  padding: 8rem 12rem;
`;
const Container = styled(motion.section)`
  position: fixed;
  height: 100vh;
  left: 0;
  background: var(--white);
  color: var(--black);
  overflow: scroll;
`;

const BackButton = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: var(--black);
  font-family: 'Poppins';
  padding: 2rem 0;
  cursor: pointer;
  transition: var(--hover-transition);
  position: fixed;
  right: 2rem;
  top: 0;
  &:hover {
    color: var(--almond);
  }
  i {
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }
`;
