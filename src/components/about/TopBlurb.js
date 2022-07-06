import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AboutImage from '../../imgs/About.jpg';
export default function TopBlurb() {
  return (
    <Blurb>
      <h2>I design and build things for the internet.</h2>
      <Grid>
        <MainText>
          <Location>
            <i className="icon-location" />
            <h3>London, UK</h3>
          </Location>
          <p>Hi there! I'm Luke, a Web Developer based in London.</p>
          <p>
            I am passionate about creating visually pleasing and performant
            websites. I work both as a freelance developer and as a contractor
            for tech businesses in need of frontend design and development.
          </p>
          <p>
            My most recent project was converting website designs into code for
            Seatlab NFT, an exciting new start up set to revolutionise the way
            event ticketing is managed with the use of NFTs.{' - '}
            <Link to="/work">
              <span style={{ fontWeight: 500, color: 'var(--almond)' }}>
                view my recent projects.
              </span>
            </Link>
          </p>
          <p>
            If you'd like to discuss a project you have in mind please{' - '}
            <Link to="/contact">
              <span style={{ fontWeight: 500, color: 'var(--almond)' }}>
                contact me here.
              </span>
            </Link>
          </p>
        </MainText>
        <ImageContainer>
          <img src={AboutImage} />
        </ImageContainer>
      </Grid>
    </Blurb>
  );
}

const Blurb = styled.div`
  h2 {
    font-size: 4rem;
    font-weight: 500;
    padding: 0 6rem;
    max-width: 25ch;
    // MEDIA QUERY
    @media only screen and (max-width: 1000px) {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  margin: 8rem 0;
  grid-template-columns: repeat(2, 1fr);
  // MEDIA QUERY
  @media only screen and (max-width: 1000px) {
    margin: 0;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  @media only screen and (max-width: 1000px) {
    padding: 0 2rem 4rem 2rem;
    img {
      border-radius: 10px;
    }
  }
`;
const MainText = styled.div`
  padding: 0 3rem 0rem 6rem;
  min-width: 45rem;
  h3 {
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 2;
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
  // MEDIA QUERY
  @media only screen and (max-width: 1000px) {
    padding: 2rem;
    min-width: auto;
    margin-bottom: 2rem;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    font-size: 1.2rem;
  }
  i {
    font-size: 1.5rem;
  }
  i {
    margin-right: 0.5rem;
    margin-left: -0.6rem;
    color: var(--almond);
  }
`;
