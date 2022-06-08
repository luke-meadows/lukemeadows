import styled from 'styled-components';
import CHSLOGO from '../../imgs/project-logos/logoNoText.png';
import CHSPREVIEW from '../../imgs/project-previews/CHS fullscreen.png';
export default function ProjectContent({ project }) {
  return (
    <>
      <Container>
        <div className="top">
          <div className="right">
            <h1>Connected Home Systems</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              consequatur magnam ducimus necessitatibus quidem quod consequuntur
              sint suscipit vero. Beatae aperiam magni omnis quibusdam
              reiciendis eaque deserunt suscipit, minima sit, repellendus nam
              culpa fugit sed! Tenetur sunt voluptatem expedita reiciendis rerum
              nulla minus debitis est quisquam aliquid id iste. Lexpedita
              reiciendis rerum nulla minus debitis est quisquam aliquid id iste.
            </p>
          </div>
          <div className="left">
            <div>
              <h3>Deliverables</h3>
              <p>UI Design</p>
              <p>Development</p>
              <p>CMS</p>
            </div>
            <div className="icon-container">
              <i className="icon-code" />
              <i className="icon-window" />
            </div>
          </div>
        </div>
      </Container>
      <Logo>
        <img src={CHSLOGO} alt="logo" />
      </Logo>
      <Preview>
        <img src={CHSPREVIEW} alt="" className="preview" />
      </Preview>
    </>
  );
}

const Container = styled.section`
  position: relative;
  padding: 8rem 0;
  max-width: 1000px;
  margin: 0 auto;
  h3 {
    font-weight: 600;
    font-family: 'Poppins';
    font-size: 01rem;
    line-height: 2;
    color: var(--almond);
  }

  .top {
    .left {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      p {
        font-size: 0.85rem;
        font-weight: 400;
        max-width: 20ch;
      }
      .icon-container {
        margin-left: 4rem;
        i {
          color: var(--almond);
          font-size: 2rem;
          margin-right: 1rem;
          cursor: pointer;
        }
      }
    }
    .right {
      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
        max-width: 80ch;
        line-height: 1.5;
      }
    }
  }
`;

const Logo = styled.section`
  background: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  img {
    height: 5rem;
  }
`;

const Preview = styled.section`
  background: var(--black);
  img {
    display: block;
    margin: 0 auto;
    max-width: 1000px;
    width: 1000px;
    border-radius: 10px;
  }
  padding-bottom: 3rem;
`;
