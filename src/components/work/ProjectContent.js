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
              This project was completed for a client in the smart home
              business. Connected Home Systems wanted to inject some energy back
              into their website with a completely overhauled design which
              appealed to their high end clientele.
            </p>
            <p>
              Included in the build is a content management system. The
              administrator is able to create, edit and delete the content on
              the website. Blog posts, images and past projects can all be
              managed through the password protected portal.
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
      <Preview>
        <Logo>
          <img src={CHSLOGO} alt="logo" />
        </Logo>
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
        display: flex;
        i {
          color: var(--almond);
          font-size: 2rem;
          margin-right: 1rem;
          cursor: pointer;
          transition: var(--hover-transition);
          border-radius: 100px;
          box-sizing: border-box;
          display: block;
          border: 3px solid transparent;
          padding: 0.3rem;
          &:hover {
            border: 3px solid var(--almond);
          }
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
        line-height: 1.8;
        margin-bottom: 1rem;
      }
    }
  }
`;

const Logo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  img {
    height: 6rem;
  }
`;

const Preview = styled.section`
  background: var(--black);
  .preview {
    display: block;
    margin: 0 auto;
    max-width: 1000px;
    width: 1000px;
    border-radius: 10px;
  }
  padding-bottom: 3rem;
`;
